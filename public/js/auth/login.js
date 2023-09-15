 function validateFields(field) {
        if (field.value.trim() === "") {
            setStatus(
                field,
                `${field.previousElementSibling.innerText} cannot be blank`,
                "error"
            );
            return false;
        } else {
            if (field.type === "password") {
                if (field.value.length < 8) {
                    setStatus(
                        field,
                        `${field.previousElementSibling.innerText} must be at least 8 characters`,
                        "error"
                    );
                    return false;
                } else {
                    setStatus(field, null, "success");
                    return true;
                }
            } else {
                setStatus(field, null, "success");
                return true;
            }
        }
    }

    function validateonSubmit() {
        let self = this;
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            let error = 0;
            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field}`);
                if (self.validateFields(input) === false) {
                    error++;
                }
            });
            if (error === 0) {
                localStorage.setItem("auth", 1);
                this.form.submit();
            }
        });
    }

    function setStatus(field, message, status) {
        const errorMessage = field.parentElement.querySelector(".error-message");
        if (status === "success") {
            if (errorMessage) {
                errorMessage.innerText = "";
            }
            field.classList.remove("input-error");
        }
        if (status === "error") {
            errorMessage.innerText = message;
            field.classList.add("input-error");
        }
    }