import { Post } from "./../post.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  // posts = [
  //   { title: "First", content: "my first post is here" },
  //   { title: "second", content: "my first post is here" },
  //   { title: "third", content: "my first post is here" }
  // ];
  @Input() posts: Post[] = [];

  constructor() {}

  ngOnInit() {}
}
