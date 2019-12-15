import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../styles/ScrollDialog.css";

export default function ScrollDialog() {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState("paper");

    const handleClickOpen = scrollType => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Button color="primary" onClick={handleClickOpen("paper")}>使い方</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">このサイトについて</DialogTitle>
                <DialogContent dividers={scroll === "paper"}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <h3>
                            このサイトについて</h3>
                        <p>このサイトはプレゼント選びをサポートするWebアプリです。プレゼントを贈りたい人に17個の質問に答えてもらいます。その結果からその人にピッタリなプレゼントを提案します。</p>

                        <h3>
                            このサイトの使い方について</h3>
                        <p>
                            １．最初にご自身のメードアドレスを打ち込みます。（このメールアドレスは個人のページを特定するためのものです。）</p>
                        <p>
                            ２．メールアドレスを打ち込んだら、送信をクリックしてください。</p>
                        <p>
                            ３．次のページに行ったら、「リンクをコピー」というボタンがあるのでボタンをクリックしてください。（ここで相手に送るためのリンクがコピーされます。）</p>
                        <p>
                            ４．コピーしたリンクを相手に送りましょう！！</p>
                        <p>
                            ５．相手は17問の質問に答えてもらいます。</p>
                        <p>
                            ６．相手が質問に答え終わったら、ログインページの「すでに登録していて結果を知りたい方」をクリックして登録したメールアドレスを入れてください。</p>
                        <p>
                            ７．ページがひらかれるのでプレゼントの提案結果を確認しましょう！！</p>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        閉じる
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
