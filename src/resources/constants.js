import HomePage from '../pages/Home/HomePage';
import CreatePage from '../pages/Create/CreatePage';
import DetailsPage from '../pages/Details/DetailsPage';

const appTitle = "BCGDV Poll App";

const urls = {
  home: "/",
  details: "/details",
  create: "/create",
}

const navigationList = [
  { url: urls.home, page: HomePage },
  { url: urls.details, page: DetailsPage },
  { url: urls.create, page: CreatePage }
];

export { appTitle, urls, navigationList };