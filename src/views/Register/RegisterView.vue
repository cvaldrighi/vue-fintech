<template>
    <div class="col-md-12">
        <div class="card card-container">

            <h1>Register</h1>
            <Form @submit="handleRegister" :validation-schema="schema">
                <div v-if="!successful">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <Field name="username" type="text" class="form-control input" />
                        <ErrorMessage name="username" class="error-feedback" />
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <Field name="password" type="password" class="form-control input" />
                        <ErrorMessage name="password" class="error-feedback" />
                    </div>

                    <div class="form-group button">
                        <button class="btn btn-submit btn-block" :disabled="loading">
                            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                            submit
                        </button>
                    </div>
                </div>
            </Form>

            <div v-if="message" class="alert mt-2" :class="successful ? 'alert-success' : 'alert-danger'">
                {{ message }}
            </div>
        </div>
    </div>
</template>
  
<script src="./RegisterView.js">


</script>
<style lang="scss" src="../Form.scss" scoped>

</style>