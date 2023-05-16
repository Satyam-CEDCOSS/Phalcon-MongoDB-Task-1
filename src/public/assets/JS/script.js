$("#addMeta").click(function () {
    var clone = $("#meta .meta-row").last().clone(true);
    clone.val("");
    clone.appendTo($("#meta-rows"));
});

$("#removeMeta").click(function () {
    $(this).parent().remove();
});

$("#addVariation").click(function () {
    var clone = $("#variation .variation-row").last().clone(true);
    clone.val("");
    clone.appendTo($("#variation-rows"));
});

$("#removeVariation").click(function () {
    $(this).parent().remove();
});
