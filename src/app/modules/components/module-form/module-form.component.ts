import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ModulesService } from '../../service/modules.service';

@Component({
  selector: 'app-module-form',
  templateUrl: './module-form.component.html',
  styleUrls: ['./module-form.component.scss'],
})
export class ModuleFormComponent implements OnInit {
  moduleForm: FormGroup = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    startingDate: ['', [Validators.required]],
    endingDate: ['', Validators.required],
  });
  moduleId: string | null = null;
  private loadingSub!: Subscription;
  private routeSub!: Subscription;
  submitButtonDisabled: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private ns: NotificationService,
    private loadingService: LoadingService,
    private ms: ModulesService
  ) {}

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe((params) => {
      this.moduleId = params.get('id');
      if (this.moduleId) {
        this.fetchModuleData(this.moduleId);
      }
    });
  }

  private fetchModuleData(id: string) {
    this.loadingService.show();
    this.ms.get(id).subscribe({
      next: (module) => {
        if (module) {
          this.loadingService.hide();
          this.moduleForm.patchValue({
            id: id,
            name: module.name,
            endingDate: new Date(module.endingDate),
            startingDate: new Date(module.startingDate),
          });
        } else {
           this.loadingService.hide();
          this.ns.showError('Module not found.');
        }
      },
      error: (error) => {
        console.error('Error fetching module:', error);
        this.ns.showError('Error fetching module details. Please try again.');
      }
    });
  }

  onSubmit() {
    this.submitButtonDisabled = true;
    if (this.moduleForm.valid) {
      if (this.moduleId) {
        this.ms
          .update(this.moduleId, this.moduleForm.value)
          .then(() => {
            this.ns.showSuccess('Module updated successfully!');
          })
          .catch((error) => {
            this.ns.showError('Failed to update user. Please try again.');
          })
          .finally(() => (this.submitButtonDisabled = false));
      } else {
        this.ms
          .add(this.moduleForm.value)
          .then(() => {
            this.ns.showSuccess('Module added sucessfully!');
            this.moduleForm.reset();
          })
          .catch((err) => {
            this.ns.showError('Failed to add module. Please try again.');
            console.error('Error adding user:', err);
          })
          .finally(() => (this.submitButtonDisabled = false));
      }
    }
  }
}
