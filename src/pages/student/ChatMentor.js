import React, { Component } from 'react';

class ChatMentor extends Component {
    render() {
        return (
            <div class="chat-mentor">
                <div class="container text-center pt-5">
                    <h1 class="h4">Belum ada percakapan dengan mentor</h1>
                    <p class="text-secondary p-3">segera mulai percakapan dengan mentormu jika kamu menemui<br /> kesulitan dalam mempelajari materi ataupun ketika submission</p>
                    <div class="col-lg-6 offset-lg-3">
                        <form action="" method="post">
                            <div class="form-group text-secondary">
                                <i class="icon-clip fas fa-paperclip position-absolute"></i>
                                <i class="icon-smile far fa-smile position-absolute"></i>
                                <input type="text" class="form-control rounded-pill pl-5" id="chat-mentor" name="chat-mentor" placeholder="Mulai Percakapan" required />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatMentor;