const business = require('./category.business')
const logger = require("../../../../logger")

//Controller: recebe os dados da rota e redireciona pra camada de negócios (business)
class clsCategories {

    static async createCategory(req, res) {

        try {

            const { category } = req.body

            if (!category) return res.status(400).send("Parâmetros não enviados.")

            let categoryCreated = await business.createCategory(category)

            logger.info(`Categoria criada: ${categoryCreated}`)

            return res.status(201).json(categoryCreated)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async editCategory(req, res) {

        try {

            const { category } = req.body
            const { categoryId } = req.params

            if ( !category || !categoryId) return res.status(400).send("Parâmetros não enviados.")

            let categoryEdited = await business.editCategory(categoryId, category)

            logger.info(`Categoria editada: ${categoryEdited}`)

            return res.status(200).json(categoryEdited)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async deleteCategory(req, res) {

        try {

            const { categoryId } = req.params

            if (!categoryId) return res.status(400).send("Parâmetros não enviados.")

            let categoryDeleted = await business.deleteCategory(categoryId)

            logger.info(`Categoria excluída: ${categoryDeleted}`)

            return res.status(200).json(categoryDeleted)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async getCategories(req, res) {

        try {

            let categories = await business.getCategories()

            return res.status(200).json(categories)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }
}

module.exports = clsCategories
