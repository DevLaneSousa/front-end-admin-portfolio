/* Gerado por "pnpm api:types" a partir de back-end-portfolio/openapi.json. Não edite à mão. */

export interface paths {
    "/admin/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CategoryRow"][];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["CategoryInput"];
                };
            };
            responses: {
                /** @description OK */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CategoryRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/categories/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CategoryRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["CategoryInput"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CategoryRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/categories/reorder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ReorderInput"];
                };
            };
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/certifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CertificationRow"][];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["CertificationInput"];
                };
            };
            responses: {
                /** @description OK */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CertificationRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/certifications/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CertificationRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["CertificationInput"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CertificationRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/certifications/reorder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ReorderInput"];
                };
            };
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/experiences": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ExperienceRow"][];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ExperienceInput"];
                };
            };
            responses: {
                /** @description OK */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ExperienceRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/experiences/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ExperienceRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ExperienceInput"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ExperienceRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/experiences/reorder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ReorderInput"];
                };
            };
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/media": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: {
                    folder?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "multipart/form-data": {
                        /** Format: binary */
                        file: string;
                    };
                };
            };
            responses: {
                /** @description OK */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UploadedMedia"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        url: string;
                    };
                };
            };
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    status?: "NEW" | "READ" | "ARCHIVED";
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Message"][];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/messages/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /** @enum {string} */
                        status: "NEW" | "READ" | "ARCHIVED";
                    };
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Message"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/messages/unread-count": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Count"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/overview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Overview"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/posts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AdminPostRow"][];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["PostInput"];
                };
            };
            responses: {
                /** @description OK */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AdminPost"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/posts/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AdminPost"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["PostInput"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AdminPost"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/posts/{id}/publish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        at?: string | null;
                    };
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            slug: string;
                            /** @enum {string} */
                            status: "DRAFT" | "SCHEDULED" | "PUBLISHED";
                        };
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/posts/{id}/unpublish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            slug: string;
                            /** @enum {string} */
                            status: "DRAFT" | "SCHEDULED" | "PUBLISHED";
                        };
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/process-steps": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ProcessStepRow"][];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ProcessStepInput"];
                };
            };
            responses: {
                /** @description OK */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ProcessStepRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/process-steps/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ProcessStepRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ProcessStepInput"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ProcessStepRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/process-steps/reorder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ReorderInput"];
                };
            };
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/profile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Profile"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ProfileInput"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Profile"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/projects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AdminProjectRow"][];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ProjectInput"];
                };
            };
            responses: {
                /** @description OK */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AdminProject"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/projects/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AdminProject"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ProjectInput"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AdminProject"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/projects/{id}/featured": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        isFeatured: boolean;
                    };
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            coverUrl: string | null;
                            id: string;
                            isFeatured: boolean;
                            /** @enum {string} */
                            kind: "DEV" | "DESIGN";
                            order: number;
                            slug: string;
                            /** @enum {string} */
                            status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
                            title: string;
                        };
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/projects/{id}/preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["PublicProjectDetail"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/projects/{id}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /** @enum {string} */
                        status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
                    };
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            coverUrl: string | null;
                            id: string;
                            isFeatured: boolean;
                            /** @enum {string} */
                            kind: "DEV" | "DESIGN";
                            order: number;
                            slug: string;
                            /** @enum {string} */
                            status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
                            title: string;
                        };
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/projects/reorder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ReorderInput"];
                };
            };
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ServiceRow"][];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ServiceInput"];
                };
            };
            responses: {
                /** @description OK */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ServiceRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/services/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ServiceRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ServiceInput"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ServiceRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/services/reorder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ReorderInput"];
                };
            };
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/social-links": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["SocialLinkRow"][];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["SocialLinkInput"];
                };
            };
            responses: {
                /** @description OK */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["SocialLinkRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/social-links/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["SocialLinkRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["SocialLinkInput"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["SocialLinkRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/social-links/reorder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ReorderInput"];
                };
            };
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TagRow"][];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["TagInput"];
                };
            };
            responses: {
                /** @description OK */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TagRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/tags/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TagRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["TagInput"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TagRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/tags/reorder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ReorderInput"];
                };
            };
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/talks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TalkRow"][];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["TalkInput"];
                };
            };
            responses: {
                /** @description OK */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TalkRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/talks/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TalkRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["TalkInput"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TalkRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/talks/reorder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ReorderInput"];
                };
            };
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/technologies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TechnologyRow"][];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["TechnologyInput"];
                };
            };
            responses: {
                /** @description OK */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TechnologyRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/technologies/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TechnologyRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["TechnologyInput"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TechnologyRow"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/admin/technologies/reorder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ReorderInput"];
                };
            };
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/auth/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["LoginInput"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AuthResponse"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Sem conteúdo */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            email: string;
                            /** @enum {string} */
                            role: "ADMIN";
                            sub: string;
                        };
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Usa o cookie httpOnly lc_rt */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AuthResponse"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Health"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/contact": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ContactInput"];
                };
            };
            responses: {
                /** @description Mensagem recebida */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Ok"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Muitas mensagens */
                429: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/home": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Tudo que a landing precisa numa chamada */
        get: {
            parameters: {
                query?: {
                    lang?: "pt" | "en";
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["HomeData"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/posts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    category?: "TALK" | "COURSE" | "MENTORSHIP" | "EVENT" | "PROJECT" | "CAREER";
                    page?: number;
                    perPage?: number;
                    tag?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["PaginatedPosts"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/posts/{slug}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    slug: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["PublicPostDetail"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/posts/slugs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["SlugEntry"][];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/projects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    category?: string;
                    featured?: "true" | "false";
                    kind?: "DEV" | "DESIGN";
                    lang?: "pt" | "en";
                    page?: number;
                    perPage?: number;
                    tech?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["PaginatedProjects"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/projects/{slug}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    lang?: "pt" | "en";
                };
                header?: never;
                path: {
                    slug: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["PublicProjectDetail"];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/projects/slugs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["SlugEntry"][];
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/rss.xml": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Feed RSS */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/rss+xml": string;
                    };
                };
                /** @description Dados inválidos */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não autenticado */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Não encontrado */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        AdminPost: {
            /** @enum {string} */
            category: "TALK" | "COURSE" | "MENTORSHIP" | "EVENT" | "PROJECT" | "CAREER";
            /** @default  */
            contentHtml: string;
            contentJson?: unknown;
            coverUrl?: string | null;
            eventDate?: string | null;
            eventLocation?: string | null;
            eventName?: string | null;
            excerpt: string;
            id: string;
            /** @default [] */
            media: {
                /** @default  */
                alt: string;
                caption?: string | null;
                height?: number | null;
                /** @default 0 */
                order: number;
                url: string;
                width?: number | null;
            }[];
            ogImageUrl?: string | null;
            publishedAt?: string | null;
            seoDescription?: string | null;
            seoTitle?: string | null;
            /** Format: uri */
            slidesUrl?: string | null;
            slug: string;
            /**
             * @default DRAFT
             * @enum {string}
             */
            status: "DRAFT" | "SCHEDULED" | "PUBLISHED";
            /** @default [] */
            tags: string[];
            talkId?: string | null;
            title: string;
        };
        AdminPostRow: {
            /** @enum {string} */
            category: "TALK" | "COURSE" | "MENTORSHIP" | "EVENT" | "PROJECT" | "CAREER";
            coverUrl: string | null;
            id: string;
            /** Format: date-time */
            publishedAt: string | null;
            readingMinutes: number;
            slug: string;
            /** @enum {string} */
            status: "DRAFT" | "SCHEDULED" | "PUBLISHED";
            title: string;
            /** Format: date-time */
            updatedAt: string;
        };
        AdminProject: {
            categoryId?: string | null;
            challenge?: string | null;
            client?: string | null;
            coverUrl?: string | null;
            /** Format: uri */
            designUrl?: string | null;
            id: string;
            /** @default false */
            isFeatured: boolean;
            /** @enum {string} */
            kind: "DEV" | "DESIGN";
            /** Format: uri */
            liveUrl?: string | null;
            /** @default [] */
            media: {
                /** @default  */
                alt: string;
                /**
                 * @default DESKTOP
                 * @enum {string}
                 */
                device: "DESKTOP" | "TABLET" | "MOBILE";
                height?: number | null;
                /** @default false */
                isShowcase: boolean;
                /** @default 0 */
                order: number;
                /**
                 * @default IMAGE
                 * @enum {string}
                 */
                type: "IMAGE" | "VIDEO" | "MOCKUP";
                url: string;
                width?: number | null;
            }[];
            myRole?: string | null;
            /** Format: uri */
            repoUrl?: string | null;
            results?: string | null;
            /** @default [] */
            sections: {
                body: string;
                /** @enum {string} */
                kind: "REQUIREMENTS" | "PROTOTYPE" | "DEVELOPMENT" | "INTEGRATION" | "RESULTS";
                mediaUrl?: string | null;
                /** @default 0 */
                order: number;
                title: string;
                translations?: components["schemas"]["Translations"];
            }[];
            seoDescription?: string | null;
            seoTitle?: string | null;
            slug: string;
            solution?: string | null;
            /**
             * @default DRAFT
             * @enum {string}
             */
            status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
            subtitle?: string | null;
            summary: string;
            /** @default [] */
            technologyIds: string[];
            title: string;
            translations?: components["schemas"]["Translations"];
            year?: number | null;
        };
        AdminProjectRow: {
            _count: {
                media: number;
            };
            category: {
                name: string;
            } | null;
            coverUrl: string | null;
            id: string;
            isFeatured: boolean;
            /** @enum {string} */
            kind: "DEV" | "DESIGN";
            order: number;
            slug: string;
            /** @enum {string} */
            status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
            title: string;
        };
        AuthResponse: {
            accessToken: string;
            expiresIn: number;
            user: components["schemas"]["AuthUser"];
        };
        AuthUser: {
            email: string;
            id: string;
            name: string;
            /** @enum {string} */
            role: "ADMIN";
        };
        CategoryInput: {
            name: string;
            /** @default 0 */
            order: number;
            slug: string;
            translations?: components["schemas"]["Translations"];
        };
        CategoryRow: {
            id: string;
            name: string;
            /** @default 0 */
            order: number;
            slug: string;
            translations?: components["schemas"]["Translations"];
        };
        CertificationInput: {
            /** @enum {string} */
            category: "DEV" | "DESIGN" | "ACADEMIC" | "TALK";
            hours?: string | null;
            imageUrl?: string | null;
            /** @default true */
            isPublished: boolean;
            issuedAt?: string | null;
            issuer: string;
            /** @default 0 */
            order: number;
            title: string;
            translations?: components["schemas"]["Translations"];
        };
        CertificationRow: {
            /** @enum {string} */
            category: "DEV" | "DESIGN" | "ACADEMIC" | "TALK";
            hours?: string | null;
            id: string;
            imageUrl?: string | null;
            /** @default true */
            isPublished: boolean;
            issuedAt?: string | null;
            issuer: string;
            /** @default 0 */
            order: number;
            title: string;
            translations?: components["schemas"]["Translations"];
        };
        ContactInput: {
            /** @enum {string|null} */
            budgetRange?: "Até R$ 3 mil" | "R$ 3 mil a R$ 8 mil" | "R$ 8 mil a R$ 20 mil" | "Acima de R$ 20 mil" | "Vaga CLT/PJ" | null;
            captchaToken?: string | null;
            company?: string | null;
            /** Format: email */
            email: string;
            message: string;
            name: string;
            phone?: string | null;
            subject: string;
        };
        Count: {
            count: number;
        };
        ExperienceInput: {
            description?: string | null;
            endDate?: string | null;
            /** @default true */
            isPublished: boolean;
            /** @enum {string} */
            kind: "WORK" | "EDUCATION" | "ACHIEVEMENT" | "LEADERSHIP";
            /** @default 0 */
            order: number;
            organization: string;
            startDate: string | null;
            title: string;
            translations?: components["schemas"]["Translations"];
        };
        ExperienceRow: {
            description?: string | null;
            endDate?: string | null;
            id: string;
            /** @default true */
            isPublished: boolean;
            /** @enum {string} */
            kind: "WORK" | "EDUCATION" | "ACHIEVEMENT" | "LEADERSHIP";
            /** @default 0 */
            order: number;
            organization: string;
            startDate: string | null;
            title: string;
            translations?: components["schemas"]["Translations"];
        };
        Health: {
            /** @enum {string} */
            status: "ok";
            /** Format: date-time */
            time: string;
        };
        HomeData: {
            certifications: components["schemas"]["PublicCertification"][];
            experiences: components["schemas"]["PublicExperience"][];
            featuredProjects: components["schemas"]["PublicProjectCard"][];
            latestPosts: components["schemas"]["PublicPostCard"][];
            processSteps: components["schemas"]["PublicProcessStep"][];
            profile: components["schemas"]["PublicProfile"];
            projects: components["schemas"]["PublicProjectCard"][];
            recentTalks: components["schemas"]["PublicTalk"][];
            services: components["schemas"]["PublicService"][];
            showcase: components["schemas"]["ResponsiveShowcaseItem"][];
            socialLinks: components["schemas"]["PublicSocialLink"][];
            technologies: components["schemas"]["PublicTechnology"][];
            upcomingTalks: components["schemas"]["PublicTalk"][];
        };
        LoginInput: {
            /** Format: email */
            email: string;
            password: string;
        };
        Message: {
            budgetRange: string | null;
            company: string | null;
            /** Format: date-time */
            createdAt: string;
            email: string;
            id: string;
            message: string;
            name: string;
            phone: string | null;
            /** @enum {string} */
            status: "NEW" | "READ" | "ARCHIVED";
            subject: string;
        };
        Ok: {
            /** @enum {boolean} */
            ok: true;
        };
        Overview: {
            drafts: number;
            newMessages: number;
            posts: number;
            projects: number;
            scheduled: number;
            talksAhead: number;
        };
        PaginatedPosts: {
            items: components["schemas"]["PublicPostCard"][];
            page: number;
            perPage: number;
            total: number;
            totalPages: number;
        };
        PaginatedProjects: {
            items: components["schemas"]["PublicProjectCard"][];
            page: number;
            perPage: number;
            total: number;
            totalPages: number;
        };
        PostInput: {
            /** @enum {string} */
            category: "TALK" | "COURSE" | "MENTORSHIP" | "EVENT" | "PROJECT" | "CAREER";
            /** @default  */
            contentHtml: string;
            contentJson?: unknown;
            coverUrl?: string | null;
            eventDate?: string | null;
            eventLocation?: string | null;
            eventName?: string | null;
            excerpt: string;
            /** @default [] */
            media: {
                /** @default  */
                alt: string;
                caption?: string | null;
                height?: number | null;
                /** @default 0 */
                order: number;
                url: string;
                width?: number | null;
            }[];
            ogImageUrl?: string | null;
            publishedAt?: string | null;
            seoDescription?: string | null;
            seoTitle?: string | null;
            /** Format: uri */
            slidesUrl?: string | null;
            slug: string;
            /**
             * @default DRAFT
             * @enum {string}
             */
            status: "DRAFT" | "SCHEDULED" | "PUBLISHED";
            /** @default [] */
            tags: string[];
            talkId?: string | null;
            title: string;
        };
        ProcessStepInput: {
            /** @default [] */
            artifacts: string[];
            description: string;
            icon?: string | null;
            /** @default true */
            isPublished: boolean;
            /** @default 0 */
            order: number;
            title: string;
            translations?: components["schemas"]["Translations"];
        };
        ProcessStepRow: {
            /** @default [] */
            artifacts: string[];
            description: string;
            icon?: string | null;
            id: string;
            /** @default true */
            isPublished: boolean;
            /** @default 0 */
            order: number;
            title: string;
            translations?: components["schemas"]["Translations"];
        };
        Profile: {
            /** @enum {string} */
            availability: "AVAILABLE" | "LIMITED" | "UNAVAILABLE";
            /** Format: uri */
            avatarUrl?: string | null;
            /** Format: uri */
            badgePhotoUrl?: string | null;
            bioLong?: string | null;
            bioShort: string;
            company: string;
            displayName: string;
            /** Format: email */
            email: string;
            fullName: string;
            headline: string;
            location: string;
            /** Format: uri */
            resumeUrl?: string | null;
            roleTitle: string;
            translations?: components["schemas"]["Translations"];
            whatsapp?: string | null;
        };
        ProfileInput: {
            /** @enum {string} */
            availability: "AVAILABLE" | "LIMITED" | "UNAVAILABLE";
            /** Format: uri */
            avatarUrl?: string | null;
            /** Format: uri */
            badgePhotoUrl?: string | null;
            bioLong?: string | null;
            bioShort: string;
            company: string;
            displayName: string;
            /** Format: email */
            email: string;
            fullName: string;
            headline: string;
            location: string;
            /** Format: uri */
            resumeUrl?: string | null;
            roleTitle: string;
            translations?: components["schemas"]["Translations"];
            whatsapp?: string | null;
        };
        ProjectInput: {
            categoryId?: string | null;
            challenge?: string | null;
            client?: string | null;
            coverUrl?: string | null;
            /** Format: uri */
            designUrl?: string | null;
            /** @default false */
            isFeatured: boolean;
            /** @enum {string} */
            kind: "DEV" | "DESIGN";
            /** Format: uri */
            liveUrl?: string | null;
            /** @default [] */
            media: {
                /** @default  */
                alt: string;
                /**
                 * @default DESKTOP
                 * @enum {string}
                 */
                device: "DESKTOP" | "TABLET" | "MOBILE";
                height?: number | null;
                /** @default false */
                isShowcase: boolean;
                /** @default 0 */
                order: number;
                /**
                 * @default IMAGE
                 * @enum {string}
                 */
                type: "IMAGE" | "VIDEO" | "MOCKUP";
                url: string;
                width?: number | null;
            }[];
            myRole?: string | null;
            /** Format: uri */
            repoUrl?: string | null;
            results?: string | null;
            /** @default [] */
            sections: {
                body: string;
                /** @enum {string} */
                kind: "REQUIREMENTS" | "PROTOTYPE" | "DEVELOPMENT" | "INTEGRATION" | "RESULTS";
                mediaUrl?: string | null;
                /** @default 0 */
                order: number;
                title: string;
                translations?: components["schemas"]["Translations"];
            }[];
            seoDescription?: string | null;
            seoTitle?: string | null;
            slug: string;
            solution?: string | null;
            /**
             * @default DRAFT
             * @enum {string}
             */
            status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
            subtitle?: string | null;
            summary: string;
            /** @default [] */
            technologyIds: string[];
            title: string;
            translations?: components["schemas"]["Translations"];
            year?: number | null;
        };
        PublicCategory: {
            id: string;
            name: string;
            slug: string;
        } | null;
        PublicCertification: {
            /** @enum {string} */
            category: "DEV" | "DESIGN" | "ACADEMIC" | "TALK";
            hours: string | null;
            id: string;
            imageUrl: string | null;
            issuer: string;
            title: string;
        };
        PublicExperience: {
            description: string | null;
            /**
             * Format: date
             * @example 2026-10-24
             */
            endDate: string | null;
            id: string;
            /** @enum {string} */
            kind: "WORK" | "EDUCATION" | "ACHIEVEMENT" | "LEADERSHIP";
            organization: string;
            /**
             * Format: date
             * @example 2026-10-24
             */
            startDate: string;
            title: string;
        };
        PublicPostCard: {
            /** @enum {string} */
            category: "TALK" | "COURSE" | "MENTORSHIP" | "EVENT" | "PROJECT" | "CAREER";
            coverUrl: string | null;
            eventName: string | null;
            excerpt: string;
            id: string;
            /** Format: date-time */
            publishedAt: string;
            readingMinutes: number;
            slug: string;
            tags: components["schemas"]["PublicTag"][];
            title: string;
        };
        PublicPostDetail: components["schemas"]["PublicPostCard"] & {
            contentHtml: string;
            /**
             * Format: date
             * @example 2026-10-24
             */
            eventDate: string | null;
            eventLocation: string | null;
            media: components["schemas"]["PublicPostMedia"][];
            ogImageUrl: string | null;
            related: components["schemas"]["PublicPostCard"][];
            seoDescription: string | null;
            seoTitle: string | null;
            slidesUrl: string | null;
        };
        PublicPostMedia: {
            alt: string;
            caption: string | null;
            height: number | null;
            id: string;
            url: string;
            width: number | null;
        };
        PublicProcessStep: {
            artifacts: string[];
            description: string;
            icon: string | null;
            id: string;
            title: string;
        };
        PublicProfile: {
            /** @enum {string} */
            availability: "AVAILABLE" | "LIMITED" | "UNAVAILABLE";
            avatarUrl: string | null;
            badgePhotoUrl: string | null;
            bioLong: string | null;
            bioShort: string;
            company: string;
            displayName: string;
            email: string;
            fullName: string;
            headline: string;
            location: string;
            resumeUrl: string | null;
            roleTitle: string;
            whatsapp: string | null;
        };
        PublicProjectCard: {
            category: components["schemas"]["PublicCategory"];
            coverUrl: string | null;
            designUrl: string | null;
            id: string;
            isFeatured: boolean;
            /** @enum {string} */
            kind: "DEV" | "DESIGN";
            liveUrl: string | null;
            slug: string;
            subtitle: string | null;
            summary: string;
            technologies: components["schemas"]["PublicTechnology"][];
            title: string;
            year: number | null;
        };
        PublicProjectDetail: components["schemas"]["PublicProjectCard"] & {
            challenge: string | null;
            client: string | null;
            media: components["schemas"]["PublicProjectMedia"][];
            myRole: string | null;
            repoUrl: string | null;
            results: string | null;
            sections: components["schemas"]["PublicProjectSection"][];
            seoDescription: string | null;
            seoTitle: string | null;
            solution: string | null;
        };
        PublicProjectMedia: {
            alt: string;
            /** @enum {string} */
            device: "DESKTOP" | "TABLET" | "MOBILE";
            height: number | null;
            id: string;
            /** @enum {string} */
            type: "IMAGE" | "VIDEO" | "MOCKUP";
            url: string;
            width: number | null;
        };
        PublicProjectSection: {
            body: string;
            id: string;
            /** @enum {string} */
            kind: "REQUIREMENTS" | "PROTOTYPE" | "DEVELOPMENT" | "INTEGRATION" | "RESULTS";
            mediaUrl: string | null;
            title: string;
        };
        PublicService: {
            deliverables: string[];
            description: string;
            icon: string | null;
            id: string;
            title: string;
        };
        PublicSocialLink: {
            icon: string;
            id: string;
            label: string;
            url: string;
        };
        PublicTag: {
            name: string;
            slug: string;
        };
        PublicTalk: {
            coverUrl: string | null;
            /**
             * Format: date
             * @example 2026-10-24
             */
            date: string;
            event: string;
            id: string;
            /** @enum {string} */
            kind: "TALK" | "COURSE" | "MENTORSHIP" | "WORKSHOP";
            link: string | null;
            location: string | null;
            postSlug: string | null;
            title: string;
        };
        PublicTechnology: {
            description: string | null;
            icon: string | null;
            id: string;
            /** @enum {string} */
            kind: "PRACTICE" | "TECHNOLOGY" | "TOOL" | "INTEGRATION_PATTERN" | "INTEGRATION";
            /** @enum {string} */
            layer: "PRODUCT" | "FRONTEND" | "BACKEND" | "DATABASE" | "DESIGN" | "MOBILE" | "DEVOPS" | "ANIMATION" | "INTEGRATION";
            name: string;
            slug: string;
        };
        ReorderInput: {
            ids: string[];
        };
        ResponsiveShowcaseItem: {
            media: components["schemas"]["PublicProjectMedia"];
            projectSlug: string;
            projectTitle: string;
        };
        ServiceInput: {
            /** @default [] */
            deliverables: string[];
            description: string;
            icon?: string | null;
            /** @default true */
            isPublished: boolean;
            /** @default 0 */
            order: number;
            title: string;
            translations?: components["schemas"]["Translations"];
        };
        ServiceRow: {
            /** @default [] */
            deliverables: string[];
            description: string;
            icon?: string | null;
            id: string;
            /** @default true */
            isPublished: boolean;
            /** @default 0 */
            order: number;
            title: string;
            translations?: components["schemas"]["Translations"];
        };
        SlugEntry: {
            slug: string;
            /** Format: date-time */
            updatedAt: string;
        };
        SocialLinkInput: {
            icon: string;
            /** @default true */
            isPublished: boolean;
            label: string;
            /** @default 0 */
            order: number;
            /** Format: uri */
            url: string;
        };
        SocialLinkRow: {
            icon: string;
            id: string;
            /** @default true */
            isPublished: boolean;
            label: string;
            /** @default 0 */
            order: number;
            /** Format: uri */
            url: string;
        };
        TagInput: {
            name: string;
            slug: string;
        };
        TagRow: {
            id: string;
            name: string;
            slug: string;
        };
        TalkInput: {
            audience?: string | null;
            coverUrl?: string | null;
            date: string | null;
            event: string;
            /** @default true */
            isPublished: boolean;
            /** @enum {string} */
            kind: "TALK" | "COURSE" | "MENTORSHIP" | "WORKSHOP";
            /** Format: uri */
            link?: string | null;
            location?: string | null;
            /** @default 0 */
            order: number;
            title: string;
            translations?: components["schemas"]["Translations"];
        };
        TalkRow: {
            audience?: string | null;
            coverUrl?: string | null;
            date: string | null;
            event: string;
            id: string;
            /** @default true */
            isPublished: boolean;
            /** @enum {string} */
            kind: "TALK" | "COURSE" | "MENTORSHIP" | "WORKSHOP";
            /** Format: uri */
            link?: string | null;
            location?: string | null;
            /** @default 0 */
            order: number;
            title: string;
            translations?: components["schemas"]["Translations"];
        };
        TechnologyInput: {
            description?: string | null;
            icon?: string | null;
            /** @default true */
            isPublished: boolean;
            /**
             * @default TECHNOLOGY
             * @enum {string}
             */
            kind: "PRACTICE" | "TECHNOLOGY" | "TOOL" | "INTEGRATION_PATTERN" | "INTEGRATION";
            /** @enum {string} */
            layer: "PRODUCT" | "FRONTEND" | "BACKEND" | "DATABASE" | "DESIGN" | "MOBILE" | "DEVOPS" | "ANIMATION" | "INTEGRATION";
            name: string;
            /** @default 0 */
            order: number;
            slug: string;
            translations?: components["schemas"]["Translations"];
        };
        TechnologyRow: {
            description?: string | null;
            icon?: string | null;
            id: string;
            /** @default true */
            isPublished: boolean;
            /**
             * @default TECHNOLOGY
             * @enum {string}
             */
            kind: "PRACTICE" | "TECHNOLOGY" | "TOOL" | "INTEGRATION_PATTERN" | "INTEGRATION";
            /** @enum {string} */
            layer: "PRODUCT" | "FRONTEND" | "BACKEND" | "DATABASE" | "DESIGN" | "MOBILE" | "DEVOPS" | "ANIMATION" | "INTEGRATION";
            name: string;
            /** @default 0 */
            order: number;
            slug: string;
            translations?: components["schemas"]["Translations"];
        };
        /** @default {} */
        Translations: {
            en?: {
                [key: string]: string | string[];
            };
        };
        UploadedMedia: {
            bytes: number;
            height: number | null;
            /** @enum {string} */
            type: "IMAGE" | "VIDEO" | "FILE";
            url: string;
            width: number | null;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
