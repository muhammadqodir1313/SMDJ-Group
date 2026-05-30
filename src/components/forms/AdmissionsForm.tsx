"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

type AdmissionsFormValues = { childName: string; age: number; classLevel: string; parentName: string; phone: string; comment: string };

export function AdmissionsForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdmissionsFormValues>();

  const onSubmit = async (data: AdmissionsFormValues) => {
    setErrorMessage("");
    setIsSubmitting(true);
    try {
      // Frontend demo: ma'lumotlar serverga yuborilmaydi (backend yo'q)
      console.log("Qabul arizasi (demo):", data);
      await new Promise((resolve) => setTimeout(resolve, 400));
      setIsSubmitted(true);
      reset();
    } catch {
      setErrorMessage("Ariza yuborilmadi. Iltimos, qayta urinib ko'ring.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) return <p className="rounded-xl bg-emerald-50 p-4 text-emerald-700">Rahmat! Arizangiz muvaffaqiyatli qabul qilindi.</p>;
  return <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl bg-white p-6 shadow-sm"><div><label htmlFor="child-name" className="mb-1 block text-sm font-medium">Bolaning ismi</label><input id="child-name" className="w-full rounded-lg border border-slate-300 px-3 py-2" {...register("childName", { required: true })} />{errors.childName && <p className="mt-1 text-xs text-red-500">To'ldirilishi shart maydon</p>}</div><div className="grid gap-4 md:grid-cols-2"><div><label htmlFor="child-age" className="mb-1 block text-sm font-medium">Yoshi</label><input id="child-age" type="number" className="w-full rounded-lg border border-slate-300 px-3 py-2" {...register("age", { required: true, min: 5 })} />{errors.age && <p className="mt-1 text-xs text-red-500">Yosh 5 dan katta bo'lishi kerak</p>}</div><div><label htmlFor="class-level" className="mb-1 block text-sm font-medium">Sinf bosqichi</label><input id="class-level" className="w-full rounded-lg border border-slate-300 px-3 py-2" {...register("classLevel", { required: true })} />{errors.classLevel && <p className="mt-1 text-xs text-red-500">To'ldirilishi shart maydon</p>}</div></div><div><label htmlFor="parent-name" className="mb-1 block text-sm font-medium">Ota-ona ismi</label><input id="parent-name" className="w-full rounded-lg border border-slate-300 px-3 py-2" {...register("parentName", { required: true })} />{errors.parentName && <p className="mt-1 text-xs text-red-500">To'ldirilishi shart maydon</p>}</div><div><label htmlFor="parent-phone" className="mb-1 block text-sm font-medium">Telefon</label><input id="parent-phone" className="w-full rounded-lg border border-slate-300 px-3 py-2" {...register("phone", { required: true })} />{errors.phone && <p className="mt-1 text-xs text-red-500">To'ldirilishi shart maydon</p>}</div><div><label htmlFor="comment" className="mb-1 block text-sm font-medium">Izoh</label><textarea id="comment" className="w-full rounded-lg border border-slate-300 px-3 py-2" rows={4} {...register("comment")} /></div>{errorMessage && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{errorMessage}</p>}<button type="submit" disabled={isSubmitting} className="rounded-full bg-[#0F2747] px-6 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70">{isSubmitting ? "Yuborilmoqda..." : "Arizani yuborish"}</button></form>;
}
