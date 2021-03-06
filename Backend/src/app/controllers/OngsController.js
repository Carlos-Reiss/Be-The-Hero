import connection from '../../database/connection';
import generateUniqueId from '../../utils/generateUniqueId';

class OngsController{
  async store(req,res){
    const {name, email, whatsapp, city, uf } = req.body;
    
    const id = generateUniqueId();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id }); 
  }
  async index(req,res){
    const ongs = await connection('ongs').select('*');
    return res.json(ongs)
  }
}
export default new OngsController();