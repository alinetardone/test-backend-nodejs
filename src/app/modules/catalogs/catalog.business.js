const repositories = require('./catalog.repository')
const { errors } = require('../../services/error.service')

//Business: Camada de negócios -> faz as validações e chama o banco de dados (repository)
exports.createCatalog = async (userId, productIds) => {

    try {

        let catalog = {
            userId,
            "productIds": productIds
        }

        const catalogCreated = await repositories.create(catalog)

        if (!catalogCreated) {

            throw errors.internalServerError(`Houve um erro ao cadastrar o catálogo`)
        }

        return catalogCreated

    } catch (error) {

        throw error
    }
}

exports.editCatalog = async (catalogId, catalog) => {

    try {

        const catalogEdited = await repositories.update(catalogId, catalog)

        if (!catalogEdited) {

            throw errors.internalServerError(`Houve um erro ao editar o catálogo`)
        }

        return catalogEdited

    } catch (error) {

        throw error
    }
}

exports.deleteCatalog = async (catalogId) => {

    try {

        const catalogDeleted = await repositories.delete(catalogId)

        if (!catalogDeleted) {

            throw errors.internalServerError(`Houve um erro ao excluir o catálogo`)
        }

        return catalogDeleted

    } catch (error) {

        throw error
    }
}
exports.deleteProductInCatalog = async (catalogId, productId) => {

    try {

        const catalogDeleted = await repositories.deleteByFilter(catalogId, productId)

        if (!catalogDeleted) {

            throw errors.internalServerError(`Houve um erro ao excluir o catálogo`)
        }

        return catalogDeleted

    } catch (error) {

        throw error
    }
}

exports.getCatalogs = async () => {

    try {

        const catalogs = await repositories.find()

        if (!catalogs) {

            throw errors.notFound(`Nenhum catálogo foi encontrado`)
        }

        return catalogs

    } catch (error) {

        throw error
    }
}

exports.getCatalogByUserId = async (userId) => {

    try {

        const catalog = await repositories.find({userId})

        if (!catalog) {

            throw errors.notFound(`Nenhum catálogo foi encontrado`)
        }

        return catalog

    } catch (error) {

        throw error
    }
}