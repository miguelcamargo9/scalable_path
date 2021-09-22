<template>
    <div class="row justify-content-center mt-4">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Task</div>

                <div class="card-body">
                    <div class="d-flex flex-row-reverse">
                        <a
                            href="#"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#createForm"
                            >Create</a
                        >
                    </div>
                    <table class="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Task</th>
                                <th colspan="2">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="task in tasks" :key="task.id">
                                <th scope="row">{{ task.id }}</th>
                                <td>{{ task.keep }}</td>
                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-warning"
                                    >
                                        EDITAR
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                        v-on:click.prevent="deleteTask(task)"
                                    >
                                        ELIMINAR
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tasks: {}
        };
    },
    methods: {
        getTasks() {
            axios.get("/tasks").then(response => {
                this.tasks = response.data;
            });
        },
        deleteTask(task) {
            axios.delete("/tasks/" + task.id).then(response => {
                this.$toastr.s(`The task ${task.keep} was deleted.`);
                this.getTasks();
            });
        }
    },
    created() {
        this.getTasks();
    }
};
</script>
