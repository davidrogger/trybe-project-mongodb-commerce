db.produtos.updateOne(
  { nome: "Big Mac" },
  {
    $currentDate: {
      ultimaModificacao: { $type: "date" },
    },
  },
);

db.produtos.find(
  { nome: "Big Mac" },
  {
    _id: false,
    nome: true,
  },
);