
const wordHtml = `
<div class="th-p-3 selector">
	<div class="table-responsive">
		<table class="table table-bordered table-vcenter" border="1" cellspacing="0" cellpadding="0" width="620"
			style="mso-table-layout-alt:fixed;">
			<tbody>
				<tr class="">
					<td><span class="th-text-uppercase">A</span></td>
					<td class="text-right"><strong data-id="_id">B</strong></td>
				</tr>
				<tr class="">
					<td><span class="th-text-uppercase">C</span></td>
					<td class="text-right"><strong data-id="total_occupant">D</strong></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
`

var _exportWord = function(selector = 'selector') {
    const preHtml = `<html xmlns:o='urn:schemas-microsoft-com:office:office' 
        xmlns:w='urn:schemas-microsoft-com:office:word' 
        xmlns='http://www.w3.org/TR/REC-html40'>
        <head><meta charset='utf-8'><title>Export  Detail To Doc<` + '/title><' + '/head><body>';
    const postHtml = '<' + '/body><' + '/html>';
    const html = preHtml + wordHtml + postHtml;
    const blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });

    // Specify link url
    const url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

    // Specify file name
    let filename = `word.doc`;

    // Create download link element
    let downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Create a link to the file
        downloadLink.href = url;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }

    document.body.removeChild(downloadLink);
}