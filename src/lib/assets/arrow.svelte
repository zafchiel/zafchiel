<script lang="ts">
  const paintAction = (node: SVGPathElement) => {
    const pathLength = node.getTotalLength();

    node.setAttribute("stroke-dasharray", pathLength.toString());
    node.setAttribute("stroke-dashoffset", pathLength.toString());

    node.innerHTML = `
        <animate
            attributeName="stroke-dashoffset"
            begin="0s"
            dur="2s"
            to="0"
            fill="freeze"
        />
    `;
  };
</script>

<svg
  width="20"
  height="48"
  viewBox="0 0 267 422"
  xmlns="http://www.w3.org/2000/svg"
>
  <g class="layer">
    <title>Layer 1</title>
    <path
      d="m158.62,211.01l-158.62,-211l104.47,0l158.62,211l-158.62,211l-104.47,0l158.62,-211z"
      fill="none"
      stroke="#fff"
      stroke-width="3"
      use:paintAction
    />
  </g>
</svg>
