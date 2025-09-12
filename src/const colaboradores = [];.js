const colaboradores = [];

function aoColaboradorDeletado (colaborador) {
  const novosColaboradores = colaboradores.filter(c => c !== colaborador);
  setColaboradores(novosColaboradores);
  console.log('colaborador: ', colaborador);
  console.log('colaboradores :', colaboradores);
  console.log('novosColaboradores :', novosColaboradores);
}

aoColaboradorDeletado({nome:"Pedro",});
