document.querySelector("form.comment").addEventListener("random", (e) => {
  e.preventDefault();
  const user = document.getElementById("user").value;
  const comment = document.getElementById("comment").value;
  const rating = document.getElementById("rating").value;
  const id = joke.id;
  postComment(user, comment, rating, id);
});

const postComment = async (user, comment, rating, id) => {
  console.log(user, comment, rating, id);
  const url = "http://127.0.0.1:3000/api/v1/comments/";

  try {
    const res = await axios({
      method: "POST",
      url: url,
      data: {
        user,
        comment,
        rating,
        id,
      },
    });
    console.log(res);
    if (res.data.status === "success") {
      showAlert("success", "Comment submitted successfully!");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
