import { PostsService } from "./../posts.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent implements OnInit {
  enteredTitle = "";
  enteredContent = "";

  constructor(
    private postsService: PostsService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
