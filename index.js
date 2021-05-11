function resizeMasonryItem(item) {
  const grid = document.querySelector(".masonry");
  const rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue("row-gap")
  );
  const rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
  );

  const rowSpan = Math.ceil(
    (item.querySelector(".masonry-content").getBoundingClientRect().height +
      rowGap) /
      (rowHeight + rowGap)
  );

  item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllMasonryItmes() {
  const allItems = document.querySelectorAll(".masonry-brick");

  allItems.forEach(resizeMasonryItem);
}

const masonryEvents = ["load", "resize"];
masonryEvents.forEach((event) => {
  window.addEventListener(event, resizeAllMasonryItmes);
});
