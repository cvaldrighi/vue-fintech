<template>
  <div class="col-md-12">
    <div class="card card-container">
      <h1>Login</h1>

      <Form @submit="handleLogin" :validation-schema="schema">
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
          <button class="btn btn-submit" :disabled="loading">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>submit</span>
          </button>
        </div>
        <div class="form-group mt-2">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>

    </div>
  </div>
</template>
<script src="./LoginView.js">
</script>

<style lang="scss" src="../Form.scss" scoped>

</style>
