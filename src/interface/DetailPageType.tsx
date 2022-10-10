export interface WritingInfo {
    authId: string;
    contact: string;
    createdDate: string;
    expectedPeriod: string;
    fieldsList: FieldsListData[];
    id: number;
    isCompleted: boolean;
    isWriter: boolean;
    modifiedDate: string;
    recruitIntroduction: string;
    recruitType: string;
    title: string;
}

export interface FieldsListData {
    id: number;
    fieldsName: string;
    recruitCount: number;
    totalAbility: string;
    stacks: {
        id: number;
        stackName: string;
    };
}
