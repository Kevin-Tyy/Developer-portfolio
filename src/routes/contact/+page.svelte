<script lang="ts">
  import Icon from "../../components/Icon.svelte";
  import emailjs from "@emailjs/browser";
  import Select from "svelte-select";

  import { PUBLIC_KEY, PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID } from "$env/static/public";
  import Snackbar from "../../components/Snackbar.svelte";

  let names: string = "";
  let email: string = "";
  let subject: string = "";
  let message: string = "";
  let loading: boolean = false;
  //state for error messages

  let nameError: string;
  let emailError: string;
  let subjectError: string;

  const validateEmail = (email: string) => {
    if (!email) {
      emailError = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = "Invalid email format";
    } else {
      emailError = "";
    }
  };

  const validateNames = (names: string) => {
    if (names.trim().length < 1) {
      nameError = "Enter a name";
    } else {
      nameError = "";
    }
  };
  const validateSubject = (subject: string) => {
    if (!subject) {
      subjectError = "Select a subject";
    } else {
      subjectError = "";
    }
  };

  function sendEmail(e: any) {
    loading = true;
    emailjs
      .sendForm(PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(
        (result) => {
          showSnackbar("Message delivered <br> you'll hear from me soon 😉");
          resetPage();
        },
        (error) => {
          showSnackbar("Couldn't send message");
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        loading = false;
      });
  }
  const submitHandler = (e: any) => {
    validateEmail(email);
    validateNames(names);
    validateSubject(subject);
    if (!nameError && !subjectError && !emailError) {
      sendEmail(e);
    }
  };

  const resetPage = () => {
    names = "";
    subject = "";
    email = "";
    message = "";
  };
  //snack bar notification
  function hideSnackbar() {
    isSnackbarVisible = false;
  }

  let snackbarMessage: string;
  let isSnackbarVisible: boolean;
  function showSnackbar(snackMessage: string) {
    snackbarMessage = snackMessage;
    isSnackbarVisible = true;
    setTimeout(hideSnackbar, 2000);
  }
  const subjects = ["Web application", "Mobile application", "UI/UX design", "Desktop application", "Database development"];
  function handleSelectChange(event: any) {
    subject = event.target.value;
  }
</script>

z
<svelte:head>
  <title>Kevin † Contact</title>
</svelte:head>
<section class="pt-28 max-w-[600px] mx-auto">
  <div class="ring-1 ring-gray-300 w-fit text-xs text-gray-300 flex items-center gap-2 px-3 py-2 rounded-full uppercase">
    <Icon
      classAttr="text-white w-4 h-4"
      svgData="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
    Contact
  </div>
  <h1 class="text-white text-5xl mt-10 mb-8 font-bold">
    Let's work <span class="text-secondary-100">Together!</span>
  </h1>
  <a href="mailto:tuyizerek27@gmail.com" class="text-sm text-gray-400 flex items-center gap-2 bg-gray-200/10 py-3 px-4 max-w-fit rounded-lg">
    <Icon
      svgData="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688"
      classAttr="text-gray-500 w-5 group-focus-within:text-white transition duration-200"
    />
    <span> tuyizerek27@gmail.com </span>
  </a>
  {#if nameError || subjectError || emailError}
    <p class="text-red-400 text-xs mt-10">* Marked fields are required to continue</p>
  {/if}
  <form class="mt-8" method="post" on:submit|preventDefault={submitHandler}>
    <div class="flex items-center gap-6">
      <div class="w-full">
        <div class="flex items-center gap-2">
          <label for="email" class="text-gray-200 text-xs uppercase">Full names<span class="text-red-400 text-xs">*</span></label>{#if nameError}
            <p class="text-red-400 text-xs">
              {nameError}
            </p>
          {/if}
        </div>
        <input
          type="text"
          name="names"
          id="names"
          placeholder="Your names"
          bind:value={names}
          class="bg-transparent w-full block text-white border-b border-gray-500 transition duration-300 focus-within:border-white outline-none text-sm placeholder:text-gray-500 mb-10 pt-4 pb-3"
        />
      </div>
      <div class="w-full">
        <div class="flex items-center gap-2">
          <label for="email" class="text-gray-200 text-xs uppercase">Email<span class="text-red-400 text-xs">*</span></label>
          {#if emailError}
            <p class="text-red-400 text-xs">
              {emailError}
            </p>
          {/if}
        </div>
        <input
          id="email"
          name="email"
          placeholder="Your email address"
          bind:value={email}
          class="bg-transparent w-full block text-white border-b border-gray-500 transition duration-300 focus-within:border-white outline-none text-sm placeholder:text-gray-500 mb-10 pt-4 pb-3"
        />
      </div>
    </div>
    <div class="flex items-center gap-2">
      <label for="subject" class="text-gray-200 text-xs uppercase">Subject<span class="text-red-400 text-xs">*</span></label>
      {#if subjectError}
        <p class="text-red-400 text-xs">
          {subjectError}
        </p>
      {/if}
    </div>
    <div class="border-b border-gray-500 transition duration-300 focus-within:border-white !mb-6 mt-3 pb-1.5">
      <Select
        --list-border-radius="10px"
        on:change={handleSelectChange}
        bind:value={subject}
        multiple
        class="w-full block !bg-transparent text-white !border-none !focus:border-white outline-none placeholder:text-gray-500 mb-10 pt-4 pb-2 !px-0 !text-sm"
        items={subjects}
      />
    </div>

    <label for="message" class="text-gray-200 text-xs uppercase">Message</label>
    <textarea
      id="message"
      bind:value={message}
      name="message"
      placeholder="Write your message here..."
      class="bg-transparent w-full block text-white border-b border-gray-500 transition duration-300 focus-within:border-white outline-none h-32 resize-none text-sm placeholder:text-gray-500 mb-10 pt-4 pb-2"
    />

    <label for="attachment" class="uppercase text-white text-xs flex items-center gap-2 cursor-pointer">
      <Icon
        classAttr="text-white w-5 h-5"
        svgData="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
      />
      <span>Add an attachment</span>
    </label>
    <input type="file" id="attachment" class="hidden" />
    <button type="submit" disabled={loading} class={`bg-secondary-100 py-4 px-5 mt-10 rounded-full text-black text-xs uppercase ${loading && "opacity-70	"}`}>
      {#if loading}
        Sending..
      {:else}
        Send message
      {/if}
    </button>
  </form>
  <Snackbar {isSnackbarVisible} {snackbarMessage} />
</section>
