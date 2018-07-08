//javascript part


function insRow(UUID,SN,SWT,TWT) {
  console.log('inserted in to a table');
  var x = document.getElementById('POITable');
  var new_row = x.rows[1].cloneNode(true);
  var len = x.rows.length;
  new_row.cells[0].innerHTML = len;

  /*var inp1 = new_row.cells[1].getElementsByTagName('input')[0];
  inp1.id += len;
  inp1.value = '';
  var inp2 = new_row.cells[2].getElementsByTagName('input')[0];
  inp2.id += len;
  inp2.value = '';*/
  new_row.cells[1].innerHTML = UUID;
  new_row.cells[2].innerHTML = SN;
  new_row.cells[3].innerHTML = SWT;
  new_row.cells[4].innerHTML = TWT;

  x.appendChild(new_row);
  return ;
}