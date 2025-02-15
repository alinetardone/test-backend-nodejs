const business = require('./catalog.business')
const logger = require("../../../../logger")
//Controller: recebe os dados da rota e redireciona pra camada de negócios (business)
class clsCatalogs {

    static async createCatalog(req, res) {

        try {

            const { userId } = req.params
            const { productIds } = req.body

            if (!userId || !productIds) return res.status(400).send("Parâmetros não enviados.")

            let catalogCreated = await business.createCatalog(userId, productIds)
            
            logger.info(`Catálogo criado: ${catalogCreated}`)
            return res.status(201).json(catalogCreated)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async editCatalog(req, res) {

        try {

            const { catalog } = req.body
            const { catalogId } = req.params

            if (!catalog || !catalogId) return res.status(400).send("Parâmetros não enviados.")

            let catalogEdited = await business.editCatalog(catalogId, catalog)

            logger.info(`Catálogo editado: ${catalogEdited}`)

            return res.status(200).json(catalogEdited)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async deleteCatalog(req, res) {

        try {

            const { catalogId } = req.params

            if (!catalogId) return res.status(400).send("Parâmetros não enviados.")

            let catalogDeleted = await business.deleteCatalog(catalogId)

            logger.info(`Catálogo excluído: ${catalogDeleted}`)

            return res.status(200).json(catalogDeleted)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }
    static async deleteProductInCatalog(req, res) {

        try {

            const { catalogId, productId } = req.params

            if (!catalogId || !productId) return res.status(400).send("Parâmetros não enviados.")

            let productDeleted = await business.deleteProductInCatalog(catalogId, productId)

            logger.info(`Produto do catálogo excluído: ${productDeleted}`)

            return res.status(200).json(productDeleted)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async getCatalogs(req, res) {

        try {

            let catalogs = await business.getCatalogs()

            return res.status(200).json(catalogs)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async getCatalogByUserId(req, res) {

        try {

            const { userId } = req.params

            let catalogs = await business.getCatalogByUserId(userId)

            return res.status(200).json(catalogs)

        } catch (error) {

            logger.error(error)
            return res.status(error.code ?? 500).send(error.message)
        }
    }
}

module.exports = clsCatalogs
