import express from "express";
import { celebrate, Segments, Joi } from "celebrate";
import OngsController from "./app/controllers/OngsController";
import IncidentController from "./app/controllers/IncidentController";
import ProfileController from "./app/controllers/ProfileController";
import SessionController from "./app/controllers/SessionController";

const routes = express();

routes.post("/sessions", SessionController.store);

routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .min(10)
        .max(11)
        .required(),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngsController.store
);

routes.get("/ongs", OngsController.index);

routes.post("/incidents",celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
  }),
}),IncidentController.store);

routes.get("/incidents", celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  }),
}), IncidentController.index);

routes.delete("/incidents/:incident_id", celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    incident_id: Joi.number().required(),
  })
}), IncidentController.delete);

routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown(),
  }),
  ProfileController.index
);

export default routes;
