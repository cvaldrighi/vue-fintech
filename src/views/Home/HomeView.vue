<template>
  <div class="container">
    <div class="left col-6">
      <div class="salut">
        <h1>Hello, {{ currentUser.username }}</h1>
      </div>
      <div class="balance">

        <h4>balance: </h4>
        <h4 v-if="eyeActive" class="value">
          ${{ currentAccount.balance }}
        </h4>
        <font-awesome-icon @click="TOGGLE_EYE" icon="eye" v-if="eyeActive" />
        <font-awesome-icon @click="TOGGLE_EYE" icon="eye-slash" v-if="!eyeActive" />

      </div>
    </div>
    <div class="right col-6">
      <div class="card card-container">
        <Form @submit="transfer" :validation-schema="schema">
          <div class="form-group">
            <label for="username">Transfer to:</label>
            <Field name="username" type="text" class="form-control input" />
            <ErrorMessage name="username" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="value">Value:</label>
            <Field name="value" type="text" class="form-control input" />
            <ErrorMessage name="value" class="error-feedback" />
          </div>

          <div class="form-group button">
            <button class="btn btn-submit" :disabled="loading">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span>submit</span>
            </button>
          </div>
          <div class="form-group mt-2 msg">
            <div v-if="message" class="alert alert-success" role="alert">
              {{ message }}
            </div>
          </div>
        </Form>
      </div>
    </div>

  </div>
</template>

<script src="./HomeView.js"></script>

<style lang="scss" scoped>
.container {
  display: flex;
  margin-top: 3rem;
}

.left {
  .salut {

    h1 {
      font-weight: 300;
      color: #fff;
    }
  }

  .balance {
    margin-top: 1rem;
    display: flex;

    h4 {
      font-weight: 200;
      color: #fff;
      margin-right: 0.5rem;
    }

    svg {
      cursor: pointer;
      height: 1.5rem;
      color: aqua;
      margin-left: 0.5em;
    }
  }
}

.right {
  .card-container {
    display: flex;
    padding: 3rem;
    border-radius: 20px;
    border: none;
    background-color: rgba(0, 0, 0, 0.2);

    label {
      color: #fff;
      margin-bottom: 1rem;
      margin-top: 1rem;
    }

    .form-control {
      height: 2rem;
    }


    .form-control {
      margin-bottom: 0.5rem;
    }

    .form-control:focus {
      box-shadow: 0 0 0 0.25rem rgb(7, 83, 83);
    }

    .button {
      display: flex;
      justify-content: flex-end;

      span {
        margin-right: 0.3rem;
      }
    }

    .btn-submit {
      background-color: aqua;
      border: none;
      color: black;
      margin-top: 0.8rem;

      &:hover,
      :active {
        background-color: rgb(21, 112, 112);
        color: #fff;
      }

    }

    .error-feedback {
      color: rgb(7, 83, 83);
    }

    .alert-success {
      color: rgb(21, 112, 112);
      text-align: center;
    }


  }
}
</style>


