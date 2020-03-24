import express from 'express';
import OngsController from './app/controllers/OngsController';
import IncidentController from './app/controllers/IncidentController';
import ProfileController from './app/controllers/ProfileController';
import SessionController from './app/controllers/SessionController';


const routes = express();

routes.post('/sessions', SessionController.store);

routes.post('/ongs',OngsController.store);
routes.get('/ongs',OngsController.index);

routes.post('/incidents',IncidentController.store);
routes.get('/incidents',IncidentController.index);
routes.delete('/incidents/:incident_id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

export default routes;