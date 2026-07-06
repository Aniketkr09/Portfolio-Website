const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            document.getElementById("status").innerHTML =
                "✅ Message sent successfully!";
            form.reset();
        } else {
            document.getElementById("status").innerHTML =
                "❌ Failed to send message.";
        }

    } catch (error) {
        document.getElementById("status").innerHTML =
            "❌ Server not responding.";
    }
});