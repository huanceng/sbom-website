import { ElLoading, ElMessage } from 'element-plus'
import ResponseData from "@/types/ResponseData";
import SbomPackage from "@/types/SbomPackage";
import { ref } from "vue";

export function ParseFileNameFromHeader(response: ResponseData) {
    const contentDispositionArr = response.headers['content-disposition']?.split('attachment;filename=');
    return contentDispositionArr.length == 2 ? contentDispositionArr[1] : "";
}

export function ShowLoading(loadingText = "") {
    ElLoading.service({
        fullscreen: true,
        text: loadingText
    });
}

export function HideLoading() {
    const loadingInstance = ElLoading.service();
    loadingInstance.close();
}

export function IsSelectArtifact(): boolean {
    const productName = (window as any).SBOM_PRODUCT_NAME;
    if (productName == null || productName == undefined || productName == "") {
        ElMessage({
            showClose: true,
            message: '请先选择制品信息',
            type: 'warning',
        })
        openProductDrawer();
        return false;
    }
    return true;
}

export function NoAssertionFormat(row: any, colum: any, cellValue: string, index: any): string {
    if (!cellValue) {
        return cellValue;
    }

    if (cellValue.toUpperCase() === 'NOASSERTION' || cellValue.toUpperCase() === 'NONE') {
        return ''
    };
    return cellValue;
}

export const productDrawer = ref(false);

export function openProductDrawer(): void {
    productDrawer.value = true;
}

export function closeProductDrawer(): void {
    productDrawer.value = false;
}

export function IsOpenEulerByProductName(): boolean {
    const productName = (window as any).SBOM_PRODUCT_NAME;
    if (!productName) {
        return false;
    }
    return stringIncludeIgnoreCase(productName, 'openEuler');
}

export function IsOpenEulerBySourceInfo(pkgInfo: SbomPackage): boolean {
    if (!pkgInfo) {
        return false;
    }
    return stringIncludeIgnoreCase(pkgInfo.sourceInfo, 'repodata');
}

function stringIncludeIgnoreCase(targetString: string, searchString: string) {
    if (!targetString) {
        return false;
    }
    if (!searchString) {
        return false;
    }

    return targetString.toLowerCase().includes(searchString.toLowerCase());
}