import express from "express";
import {
  createShopList,
  getTopSellingItemsByField,
  getItemsSelledByMonth,
  getShopLists,
} from "../controllers/ShopListController.js";

const shopListRouter = express.Router();

shopListRouter.route("/").get(getShopLists).post(createShopList);
shopListRouter.route("/topItemsByField/:field").get(getTopSellingItemsByField);
shopListRouter.route("/topProductsByMonth").get(getItemsSelledByMonth);

export default shopListRouter;
