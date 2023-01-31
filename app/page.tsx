import { HomeProducts } from "layouts/HomeProducts";
import { AppTheme } from "theme/AppTheme";

export default function HomePage() {
  return (
    <>
      <br />
      <br />
      <br />
      <h1>Home</h1>
      {/* <AppTheme> */}
        <HomeProducts />
      {/* </AppTheme> */}
    </> 
  );
}