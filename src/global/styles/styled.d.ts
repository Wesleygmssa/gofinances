import "styled-components";
import theme from "./theme";

/**
 *
 * @typeof copia extamente como é o tipo do objeto
 * @DeafultTheme Thema do proprio styled-components
 * @ThemeType Criando nosso ṕroprio thema
 */

declare module "styled-components" {
  type ThemeType = typeof theme;

  //Pegando a interface DefaulttTheme e acrescentando  ThemeType
  export interface DefaultTheme extends ThemeType {}
}
