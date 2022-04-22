const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
    async index(request, response) {
        const categories = await CategoriesRepository.findAll();
        return response.send(categories);
    }

    async show(request, response) {
        const { category_id } = request.params;
        if (!category_id) {
            return response.status(400).json({ error: 'Category_id is required' });
        }

        const categoryData = await CategoriesRepository.find(category_id);

        if (!categoryData) {
            return response.status(400).json({ error: 'Category Not Found' });
        }

        return response.send(categoryData);
    }

    async store(request, response) {
        const { name } = request.body;
        if (!name) {
            return response.status(400).json({ error: 'Name is required' });
        }

        const category = await CategoriesRepository.create({ name });

        return response.json(category);
    }

    async update(request, response) {
        const { category_id } = request.params;
        const { name } = request.body;

        if (!name || !category_id) {
            return response.status(400).json({ error: 'Name and Category_id is required' });
        }

        const categoryExists = await CategoriesRepository.find(category_id);
        if (!categoryExists) {
            return response.status(400).json({ error: 'Category Not Found' });
        }

        const category = await CategoriesRepository.update({ name, category_id });

        return response.send(category);
    }

    async delete(request, response) {
        const { category_id } = request.params;
        if (!category_id) {
            return response.status(400).json({ error: 'Category_id is required' });
        }

        await CategoriesRepository.delete(category_id);

        return response.sendStatus(204);
    }
}

module.exports = new CategoryController();
