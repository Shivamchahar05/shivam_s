import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { myData } from 'src/app/constant/constant-data';
@Component({
  selector: 'app-newtab',
  templateUrl: './newtab.component.html',
  styleUrls: ['./newtab.component.scss']
})
export class NewtabComponent implements OnInit {
  countrydata = myData;
  count:any
  submit=false;
  state: any = []
  district: any = []
  countrystate =new Map();
  countryControl = new FormControl();
  selectdistrict=''
  // stateControl = new FormControl();
  countryform!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.countryform = this.fb.group({
      country: [],
      addstates: this.fb.array([])
    });
  }
  addstates(): FormArray {
    return this.countryform.get('addstates') as FormArray;
  }
  onCountryChange(event:any) {
    this.countryform?.controls?.country.patchValue(event.country)
    this.state = this.countryControl.value.state_list;
  }
  onstateChange(event:any,stateindex:number) {
    console.log(event);
    
    let statename=event.value;
    let countrynames = this.countryControl.value.countrynames;
    let countryindx=countrynames == 'India' ? 1:0;
    this.countrydata[countryindx].state_list.forEach((element:any)=>{
      console.log(element);
      if(element.state_name == statename){
        this.countrystate.set(stateindex,element.district_list);
      }
    })
    this.countryform.value.addstates
  }
  newstates(): FormGroup {
    return this.fb.group({
      states:[],
      districts: this.fb.array([])
    });
  }
  addstatesnew(){
    this.addstates().push(this.newstates());
  }
  districtSkills(empIndex: number): FormArray {
    return this.addstates()
      .at(empIndex)
      .get('districts') as FormArray;
  }
  newSkill(): FormGroup {
    return this.fb.group({
      distric: [],
      city: this.fb.array([])
    });
  }
  cityadd(empIndex: number,districtIndex:number): FormArray {
    return ((<FormArray>(this.countryform.controls['addstates'])).at(empIndex).get('districts') as FormArray).at(districtIndex).get('city') as FormArray;
  }
  citySkill(): FormGroup {
    return this.fb.group({
      citys:[],
    });
  }
  adddistrictnew(empIndex: number) {
    this.districtSkills(empIndex).push(this.newSkill());
    this.onsubmit();
  } 
  addcitynew(empIndex: number,districindex:number) {

    console.log("empIndex",empIndex);
    console.log(this.citySkill(),'hiiiiiiiiiiiiiiiii');
    console.log(this.cityadd(empIndex,districindex),'mmmmmmmmmmmmm');
    this.cityadd(empIndex,districindex).push(this.citySkill());
    
  }
  onsubmit() {
    console.log(this.countryform);
    this.count=this.countryform
    this.submit=true
  }
  deletestate(addstateIndex:number){
    this.addstates().removeAt(addstateIndex);
  }

}