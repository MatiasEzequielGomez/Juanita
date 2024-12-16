export const sidebarHTML = `
     
<h2>Filtrar productos</h2>
<form id="formOrdenar">
  <div class="ordenarPrecio">
    <label for="ordenPrecio">Ordenar por precio:</label>
    <select id="ordenPrecio" name="ordenPrecio">
      <option value="menor-mayor">Precio más bajo</option>
      <option value="mayor-menor">Precio más alto</option>
    </select>
  </div>

  <div class="filtrarCategoria">
    <label for="FiltrarCategoria">Filtrar por categoría:</label>
    <select id="FiltrarCategoria" name="filtrarCategoria">
      <option value="Todas">Todas</option>
      <option value="Ropa interior">Ropa Interior</option>
      <option value="Pijama">Pijamas</option>
      <option value="Medias">Medias</option>
    </select>
  </div>

  <div class="Btnfiltro">
    <button type="button" id="BuscarFiltro" class="btn">Buscar</button>
  </div>
</form>
</div>
 `;
