import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TransformersService } from '../transformers.service';

@Component({
  selector: 'app-tranformer-list',
  templateUrl: './tranformer-list.component.html',
  styleUrls: ['./tranformer-list.component.scss'],
})
export class TranformerListComponent implements OnInit {
  transformerListSub: Subscription;
  transformerList = [];
  constructor(
    private transformersService: TransformersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTransformerList();
  }

  getTransformerList = (): void => {
    this.transformerListSub = this.transformersService
      .getTranformersList()
      .subscribe((data) => {
        if (data && data.length) {
          this.transformerList = data;
          console.log(data);
        }
      });
  };
}
