import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import BirthdayRemindarApp from "./projects-files/birthday-remindar/BirthdayRemindarApp";
import ReviewsApp from "./projects-files/reviews/ReviewsApp";
import ToursApp from "./projects-files/tours/ToursApp";
import AccordianApp from "./projects-files/accordian/AccordianApp";
import MenuApp from "./projects-files/menu/MenuApp";
import TabsApp from "./projects-files/tabs/TabsApp";
import SliderApp from "./projects-files/slider/SliderApp";
import LoremIpsumApp from "./projects-files/lorem-ipsum/LoremIpsumApp";
import ColorGeneratorApp from "./projects-files/color-generator/ColorGeneratorApp";
import GroceryBudApp from "./projects-files/grocery-bud/GroceryBudApp";
import NavbarApp from "./projects-files/navbar/NavbarApp";
import ModalSidebarApp from "./projects-files/modal-and-sidebar/ModalSidebarApp";
import StripeSubmenusApp from "./projects-files/stripe-submenus/StripeSubmenusApp";
import CartApp from "./projects-files/cart/CartApp";
import CocktailsApp from "./projects-files/cocktails/CocktailsApp";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop></ScrollToTop>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/birthday-remindar">
            <BirthdayRemindarApp></BirthdayRemindarApp>
          </Route>
          <Route path="/tours">
            <ToursApp></ToursApp>
          </Route>
          <Route path="/reviews">
            <ReviewsApp></ReviewsApp>
          </Route>
          <Route path="/accordian">
            <AccordianApp></AccordianApp>
          </Route>
          <Route path="/menu">
            <MenuApp></MenuApp>
          </Route>
          <Route path="/tabs">
            <TabsApp></TabsApp>
          </Route>
          <Route path="/slider">
            <SliderApp></SliderApp>
          </Route>
          <Route path="/lorem-ipsum-generator">
            <LoremIpsumApp></LoremIpsumApp>
          </Route>
          <Route path="/color-shades-generator">
            <ColorGeneratorApp></ColorGeneratorApp>
          </Route>
          <Route path="/grocery-bud">
            <GroceryBudApp></GroceryBudApp>
          </Route>
          <Route path="/navbar">
            <NavbarApp></NavbarApp>
          </Route>
          <Route path="/modal-and-sidebar">
            <ModalSidebarApp></ModalSidebarApp>
          </Route>
          <Route path="/stripe-submenus">
            <StripeSubmenusApp></StripeSubmenusApp>
          </Route>
          <Route path="/cart">
            <CartApp></CartApp>
          </Route>
          <Route path="/cocktails">
            <CocktailsApp></CocktailsApp>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
