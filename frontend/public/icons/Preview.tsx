import { IconProps } from "./types";

export default function Preview(props: IconProps) {
  const { width, height, color = "#000" } = props;

  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6.72 6.72"
    >
      <defs />
      <path fill={color} d="M0 0h6.72v6.72H0z" />
      <g id="Layer_x0020_1">
        <path
          fill="#fff"
          d="M.88 1.27h4.96a.08.08 0 0 1 .08.08v3.495a.08.08 0 0 1-.08.08H.88a.08.08 0 0 1-.08-.08V1.35a.08.08 0 0 1 .08-.08zm2.413 1.748c.01-.129.042-.25.094-.362h.315c-.024.113-.04.235-.044.362h-.365zm.525.16h1.064c-.005.128-.022.25-.048.362h-.968a1.885 1.885 0 0 1-.048-.362zm1.18.362c.024-.113.04-.235.044-.362h.364c-.01.128-.042.25-.093.362h-.316zm.214.42a1.216 1.216 0 0 0 0-1.725 1.216 1.216 0 0 0-1.725 0 1.216 1.216 0 0 0 0 1.725 1.216 1.216 0 0 0 1.725 0zm-1.919-.782h.365c.004.127.02.249.044.362h-.315a1.053 1.053 0 0 1-.094-.362zm.62.522h.873c-.02.06-.045.115-.073.166-.097.18-.225.291-.363.291-.138 0-.267-.111-.364-.291a1.205 1.205 0 0 1-.073-.166zm.941.241c.039-.072.073-.153.1-.24h.268a1.065 1.065 0 0 1-.449.369c.029-.04.056-.082.081-.129zm-1.036-.923c.005-.129.022-.25.048-.362h.968c.026.111.043.233.048.362H3.818zm1.224 0a2.064 2.064 0 0 0-.045-.362h.316c.051.111.084.233.093.362h-.364zM3.478 3.7h.267c.028.088.062.17.1.241.026.047.053.09.082.129a1.061 1.061 0 0 1-.449-.37zm.267-1.204h-.267a1.065 1.065 0 0 1 .449-.37 1.039 1.039 0 0 0-.081.128 1.412 1.412 0 0 0-.101.242zm1.041 0h-.873c.022-.06.046-.116.073-.166.097-.18.226-.292.364-.292.138 0 .266.112.363.292.028.05.052.106.073.166zm.169 0a1.412 1.412 0 0 0-.1-.242 1.04 1.04 0 0 0-.082-.128 1.062 1.062 0 0 1 .449.37h-.267zM2.925 3.75a.08.08 0 0 0 0-.16H1.23a.08.08 0 0 0 0 .16h1.693zm0-.572a.08.08 0 0 0 0-.16H1.23a.08.08 0 0 0 0 .16h1.693zM1.23 2.605h1.693a.08.08 0 0 0 0-.16H1.231a.08.08 0 0 0 0 .16z"
        />
        <path
          fill="#fff"
          d="M2.894 4.766h.932a.08.08 0 0 1 .08.08v.524a.08.08 0 0 1-.08.08h-.932a.08.08 0 0 1-.08-.08v-.524a.08.08 0 0 1 .08-.08z"
        />
        <path
          fill="#fff"
          d="M2.122 5.29a.08.08 0 0 0 0 .16h2.476a.08.08 0 0 0 0-.16H2.122z"
        />
      </g>
    </svg>
  );
}
