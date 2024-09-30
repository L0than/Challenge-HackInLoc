import { Category, ObjectItem } from "../utils/types";

export async function getObjects(): Promise<ObjectItem[]> {
  try {
    return data.objects as ObjectItem[];
  } catch (error) {
    console.error("Error fetching objects:", error);
    throw error;
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    return data.categories as Category[];
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}


const data = {
  objects: [
    {
      id: "a1b2",
      categoryId: "op1",
      name: "Operador 1",
      desc: "",
    },
    {
      id: "b2c3",
      categoryId: "op1",
      name: "Operador 2",
      desc: "",
    },
    {
      id: "c3d4",
      categoryId: "op1",
      name: "Operador 3",
      desc: "",
    },
    {
      id: "d4e5",
      categoryId: "op1",
      name: "Operador 4",
      desc: "",
    },
    {
      id: "e5f6",
      categoryId: "op1",
      name: "Operador 5",
      desc: "",
    },
    {
      id: "f6g7",
      categoryId: "op1",
      name: "Operador 6",
      desc: "",
    },
    {
      id: "g7h8",
      categoryId: "op1",
      name: "Operador 7",
      desc: "",
    },
    {
      id: "h8i9",
      categoryId: "op1",
      name: "Operador 8",
      desc: "",
    },
    {
      id: "i9j0",
      categoryId: "op1",
      name: "Operador 9",
      desc: "",
    },
    {
      id: "j0k1",
      categoryId: "op1",
      name: "Operador 10",
      desc: "",
    },
    {
      id: "k1l2",
      categoryId: "op1",
      name: "Operador 11",
      desc: "",
    },
    {
      id: "l2m3",
      categoryId: "op1",
      name: "Operador 12",
      desc: "",
    },
    {
      id: "m3n4",
      categoryId: "op1",
      name: "Operador 13",
      desc: "",
    },
    {
      id: "n4o5",
      categoryId: "op1",
      name: "Operador 14",
      desc: "",
    },
    {
      id: "p6q7",
      categoryId: "op1",
      name: "Operador 15",
      desc: "",
    },
    {
      id: "q7r8",
      categoryId: "op1",
      name: "Operador 16",
      desc: "",
    },
    {
      id: "r8s9",
      categoryId: "op1",
      name: "Operador 17",
      desc: "",
    },
    {
      id: "s9t0",
      categoryId: "op1",
      name: "Operador 18",
      desc: "",
    },
  ],
  categories: [
    {
      id: "52f1",
      name: "Retail",
    },
    {
      id: "e928",
      name: "Food",
    },
    {
      id: "58a9",
      name: "Services",
    },
    {
      id: "16be",
      name: "Health & Beauty",
    },
    {
      id: "d21e",
      name: "Luxury Goods",
    },
    {
      id: "a191",
      name: "Electronics",
    },
    {
      id: "87b0",
      name: "Fashion",
    },
    {
      id: "17b0",
      name: "Sanitary",
    },
    {
      id: "e753",
      name: "Entrace",
    },
  ],
};
