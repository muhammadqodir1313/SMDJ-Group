export type Program = {
  id: string;
  title: string;
  level: "Boshlang'ich" | "O'rta" | "Yuqori" | "Qo'shimcha";
  description: string;
  goals: string[];
};

export const programs: Program[] = [
  { id: "boshlangich", title: "Boshlang'ich ta'lim", level: "Boshlang'ich", description: "Asosiy savodxonlik, mantiqiy fikrlash va ijtimoiy ko'nikmalarni shakllantirish.", goals: ["Mustaqil o'qish", "Muloqot ko'nikmasi", "Ijodiy fikrlash"] },
  { id: "orta", title: "O'rta ta'lim", level: "O'rta", description: "Fanlar kesimida chuqurlashgan darslar va STEAM metodikasi asosida ta'lim.", goals: ["Tahliliy fikrlash", "Jamoa bilan ishlash", "Akademik barqarorlik"] },
  { id: "yuqori", title: "Yuqori sinflar", level: "Yuqori", description: "Universitetga tayyorgarlik va kasbiy yo'nalish bo'yicha individual mentorlik.", goals: ["Kasbiy yo'nalish", "Imtihonlarga tayyorgarlik", "Liderlik"] },
  { id: "qoshimcha", title: "Qo'shimcha dasturlar", level: "Qo'shimcha", description: "IT, robototexnika, ingliz tili, sport va san'at yo'nalishidagi to'garaklar.", goals: ["Amaliy ko'nikma", "Xalqaro til darajasi", "Sog'lom turmush"] },
];
