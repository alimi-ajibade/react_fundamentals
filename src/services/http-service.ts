import apiClient from "./api-client";

interface Entity {
    id: number;
}

class HTTPService {
    constructor(private endpoint: string) {}

    getAll<T>() {
        const controller = new AbortController(); // used to abort one or more DOM requests

        const request = apiClient.get<T[]>(`/${this.endpoint}`, {
            signal: controller.signal,
        });

        return { request, cancelRequest: () => controller.abort() };
    }

    delete(id: number) {
        return apiClient.delete(`/${this.endpoint}/${id}`);
    }

    create<T>(newEntity: T) {
        return apiClient.post(`/${this.endpoint}`, newEntity);
    }

    update<T extends Entity>(entity: T) {
        return apiClient.patch(`/${this.endpoint}/${entity.id}`, entity);
    }
}

export default function create(endpoint: string) {
    return new HTTPService(endpoint);
}
