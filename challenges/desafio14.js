db.produtos.updateMany(
  {
    ingredientes: {
      $elemMatch: {
        $eq: "picles",
      },
    },
  },
  {
    $push: {
      valoresNutricionais: {
        $each: [],
        $slice: 3,
      },
    },
  },
);

db.produtos.find(
  {
    ingredientes: {
      $elemMatch: {
        $eq: "picles",
      },
    },
  },
  {
    _id: false,
    nome: true,
    ingredientes: true,
    valoresNutricionais: true,
  },
);