import { useMutation } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import postContact from "../api/postContact";

export const Route = createLazyFileRoute("/contact")({ component: Contact });

function Contact() {
  const mutation = useMutation({
    mutationFn: (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message"),
      );
    },
  });

  return (
    <div className="contact">
      {mutation.isSuccess ? (
        <h3>Submitted!</h3>
      ) : (
        <form onSubmit={mutation.mutate}>
          <input name="name" placeholder="Name" />
          <input name="email" placeholder="Email" type="email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
