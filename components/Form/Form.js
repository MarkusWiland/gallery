import React from "react";
// REACT HOOK FORM
import DatePicker, { registerLocale } from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import sv from "date-fns/locale/sv";
registerLocale("sv", sv);
import styles from "./Form.module.css";

// REACT TOASTIFY
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// SUPABASE
import { supabase } from "../../utils/supabaseClient";
export default function Form() {
  const { register, handleSubmit, reset, watch, control } = useForm();
  const onSubmit = async (post) => {
    console.log("user", supabase.auth.user());
    try {
      const storeImages = await supabase.storage
        .from("gallery")
        .upload(
          `${post.category}/${post.categoryChild}/${post.file[0].name}`,
          post.file[0]
        );

      const addRow = await supabase.from("GalleryTable").insert([
        {
          category: post.category.toLowerCase(),
          categoryChild: post.categoryChild.toLowerCase(),
          img: post.file[0].name,
          alt: post.alt,
          date: watch("dateInput")?.toLocaleString("sv-SE").substr(0, 10),
        },
      ]);
      Promise.all([storeImages, addRow]).then(() => {
        toast.success("Lagt till!", {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 3000,
          closeButton: true,
        });
      });
      reset();
    } catch (err) {
      console.log(err.error);
      toast.error(`Något gick fel, ${err}`, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label>Kategori</label>
        <input {...register("category", { required: true, maxLength: 20 })} />
        <label>Kategori Child</label>
        <input {...register("categoryChild", { pattern: /^[A-Za-z]+$/i })} />
        <label>Alt</label>
        <input {...register("alt")} />
        <label>Välj bild</label>
        <input {...register("file")} type="file" name="file" />
        <label>Välj Datum</label>
        <Controller
          control={control}
          name="dateInput"
          render={({ field }) => (
            <DatePicker
              locale="sv"
              placeholderText="Välj datum"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
            />
          )}
        />
        <button type="submit">Skicka</button>
      </form>

      <button className="button block" onClick={() => supabase.auth.signOut()}>
        Sign Out
      </button>

      <ToastContainer />
    </>
  );
}
