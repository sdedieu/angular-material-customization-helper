import { Component } from '@angular/core';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NestedTreeControl } from '@angular/cdk/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Vegetables',
    children: [
      { name: 'Green', children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }] },
      { name: 'Orange', children: [{ name: 'Pumpkins' }, { name: 'Carrots' }] },
    ],
  },
];

@Component({
  selector: 'app-tree-preview',
  template: `
    <mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
      <mat-tree-node *matTreeNodeDef="let node" matTreeNodeToggle matTreeNodePadding>
        <button mat-icon-button disabled></button>
        {{ node.name }}
      </mat-tree-node>
      <mat-tree-node *matTreeNodeDef="let node; when: hasChild" matTreeNodePadding>
        <button mat-icon-button [attr.aria-label]="'Toggle ' + node.name" matTreeNodeToggle>
          <mat-icon>
            {{ treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right' }}
          </mat-icon>
        </button>
        {{ node.name }}
      </mat-tree-node>
    </mat-tree>
  `,
  imports: [MatTreeModule, MatIconModule, MatButtonModule],
})
export class TreePreviewComponent {
  treeControl = new NestedTreeControl<FoodNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
