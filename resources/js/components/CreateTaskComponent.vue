<template>
    <form method="POST" v-on:submit.prevent="createTask">
        <!-- Modal -->
        <div
            class="modal fade"
            id="createForm"
            tabindex="-1"
            aria-labelledby="createFormLabel"
            aria-hidden="true"
            ref="createForm"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="createFormLabel">
                            Create Task
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="keep" class="form-label">Keep</label>
                            <input
                                type="text"
                                class="form-control"
                                id="keep"
                                placeholder="Type your task here"
                                v-model="newTask"
                            />
                            <span
                                v-for="(error, key) in erros"
                                :key="key"
                                class="text-danger"
                            >
                                {{ error }}
                            </span>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="submit" class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            newTask: "",
            erros: [],
            isModalVisible: false
        };
    },
    methods: {
        createTask() {
            axios
                .post("/tasks/", {
                    keep: this.newTask
                })
                .then(response => {
                    this.newTask = "";
                    this.erros = [];
                    this.$router.go({ name: "Home" });
                    this.$toastr.s(
                        `The task ${response.data.keep} was created.`
                    );
                })
                .catch(error => {
                    this.erros = error.response.data;
                });
        },
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    },
    created() {}
};
</script>
