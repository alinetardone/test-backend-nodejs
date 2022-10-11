const business = require('./category.business')

//Controller: recebe os dados da rota e redireciona pra camada de negócios (business)
class clsCategories {

    static async createCategory(req, res) {

        try {

            const { category } = req.body

            if (!category) return res.status(400).send("Parâmetros não enviados.")

            let categoryCreated = await business.createCategory(category)

            return res.status(201).json(categoryCreated)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async editCategory(req, res) {

        try {

            const { category } = req.body
            const { categoryId } = req.params

            if ( !category || !categoryId) return res.status(400).send("Parâmetros não enviados.")

            let categoryEdited = await business.editCategory(categoryId, category)

            return res.status(200).json(categoryEdited)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async deleteCategory(req, res) {

        try {

            const { categoryId } = req.params

            if (!categoryId) return res.status(400).send("Parâmetros não enviados.")

            let categoryDeleted = await business.deleteCategory(categoryId)

            return res.status(200).json(categoryDeleted)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async getCategories(req, res) {

        try {

            let categories = await business.getCategories()

            return res.status(200).json(categories)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }
}

module.exports = clsCategories
