const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
    // Listar todos os registros
    async index(request, response) {
        const { orderBy } = request.query;

        const contacts = await ContactsRepository.findAll(orderBy);
        response.json(contacts);
    }

    // Pegar um registro
    async show(request, response) {
        const { id } = request.params;
        const contact = await ContactsRepository.findById(id);

        return !contact
            ? response.status(404).json({ error: 'User not found' })
            : response.json(contact);
    }

    // Criar um novo registro
    async store(request, response) {

        const { name, email, phone, category_id } = request.body;

        if (!name) {
            return response.status(400).json({ error: 'Name is required' });
        }

        const contactExists = await ContactsRepository.findByEmail(email);

        if (contactExists) {
            return response.status(400).json({ error: 'This e-mail is already in use' });
        }

        const contact = await ContactsRepository.create({ name, email, phone, category_id });

        return response.json(contact);
    }

    async update(request, response) {
        const { id } = request.params;
        const { name, email, phone, category_id } = request.body;

        const contacExists = await ContactsRepository.findById(id);

        if (!contacExists) {
            return response.status(404).json({ error: 'User not found' });
        }

        if (!name) {
            return response.status(400).json({ error: 'Name is required' });
        }

        const contactByEmail = await ContactsRepository.findByEmail(email);

        if (contactByEmail && contactByEmail.id !== id) {
            return response.status(400).json({ error: 'This e-mail is already in use' });
        }

        const contact = await ContactsRepository.update(id, { name, email, phone, category_id });

        return response.json(contact);
    }

    // Deletar um registro
    async delete(request, response) {
        const { id } = request.params;

        await ContactsRepository.delete(id);
        // Código 204 No Content
        return response.sendStatus(204);
    }
}

module.exports = new ContactController();
