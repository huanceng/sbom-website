import { ElLoading, ElMessage } from 'element-plus'
import ResponseData from "@/types/ResponseData";

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
        return false;
    }
    return true;
}

