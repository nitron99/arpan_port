import React, { Component } from 'react';
import './footer.css';





class footer extends Component {
    render(){
        return(
            <div className="footer">
                
                <div className="credits">
                    Made in collaboration of Arpan Das | Hemant Varshney | Palindev inc.
                </div>

                <ul className="footerlist">
                    <li className="footerlistitems"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFJklEQVR4Xu2aeah2UxSHn888FD5j5iHTH+aQmSgZiugTkilTlJlQhpJSMpNEGeIPREIRMoVMCWUeM2ceM089tV+u9557zjr7nHO/c3vfVbd7665p/87aa6+91p7FiNOsEV8/YwDGETDiCIy3wIgHwDgJjrfAeAuMOAJ93wL6twawArAs8DnwKfAu8Fcb366vAKwFHAfsCaxcsFBBuBO4BngpAMQGwCvAn8O8VQAsDPxWJBgwmsOyKHABcAQwf0CBC7oeOB34qoB/M+AUYB5gnyJ9VQCckb7AMQFnmrKsAtwFbJSh6C1gN+BtYM0UOfsCAuBW2Qp4pi4AovZh2n/nAOdmOBYVWRp4Flg9KlDAZwT8Aqw49L/LgBOm0lsWAaL25ATB01J4NvCxUFSgHwa2b1sx8BiwK/BzDgAnARcNCV4KnNxWBk66DwJu7GDxjwJ7AD8CWwL7AzelSPvXXFkEXA4cW+DYbcDhwA8tOD0f8A7g/m+TngLuBTYEtgBWStFrFP+PygC4Djh0Cq9MOiL6fEOvdwAeaagjIu6ROacocnMiYGDQ49HEeCHwa8SLAp6LgRMzZaNi9wN7TZUHygAwc14SsGIImy/uDvAOs9wH7JIhFxVxux6YaplCmTIA3DvupSg9kaLhnhpJ8sW0T6M2onx/A2cC5wP+PSWVAeDx9H5KIFHD8r0JXAXcAXxUIfg6sE4d5UFe6wGr2EqqqgRPbXD2i7wRZAKynnghFSoTnTJqtq70sj6D+WnBiFgVAKL4crqRRfSV8fwOGPJvAJ8AH6fMvG1TxQXy3wBLRvRWAaAOK0KPqgUiCnvCYwkfqi3KANgkfTEvE14sbgYsXGYCGWkbRxwtA+AWYHPA35aVNiU8FpeIKJ7LPCZgC59KKgPAuv/4Sg39ZLCnMKnsLXK1DADD3q8/E8nixy1bSWUAeEc3W0c6M5WGppnBPuJ7EZtVp8ANwMERRT3i8Xj19heiKgDWTk3HhULa+sHkLfawqCtVAKjHRGhCnCm0e+oFhPyNACDPlcB0NEZDTpcwfQssV3b7G5aNAKCMfOel9rOXpL7SFWmeEPYvCsBA4Y6ATQxbTX0jL1/rptto2Le6AAyiwU7r3qkttkjYWreM9gDd/7WoDgAOSZyu2H9fPA0gZtey1h2zX98hSO0eZR0AbFy8msZM3S0lT/OtwH45onUAUL+dnqNzDHUo8xOwfpoY1zZTFwBvgk931Maq7XwSsKucXafUBUCbjq4dOS2f63GLcrbatqvRhJ1kOgcAlaya2uDO3ecWfQFsCnzQxIFcALRpi8ymqbPC6T4N/gB2bmOq1ASAAfA+arB3oEO20RxPd1kbeOQdBVzb5MsPZNsAYKIf5oWr01S2Df+KdBh1juNaobYAUM+RaYawWCueTVZic9aM79S6NWoKgPKWn2enSqw1x4YUOeM/IHP+WOpTLgAehd4FbDz4d5fkKN4SPPIarLYfRQBYVdn//y5dgy1+bInbZzPJ+dqi60W7EEPePoR3EKu9TqgIgKXS3d+navN2YrVa6XPpeH28mrUZR9kW8PJzVrpkTBcQzg21eXvVWLvZsv+TjuQAZ2yeu4ekrdCW7YEeJ7m+D/Rcf6hJWZvjWASAgV5bYduk5yY7AeulHJFj9zPgQeABwFciX+YoaUOmDgDD9swVDiBtj62WprHLpBLZWuD7lEh9TfY14GOI19KPz2pKX260sbiIjiYARPT3nmcMQO8/UccOjiOgY4B7r34cAb3/RB07+A9STsNBhJFtuAAAAABJRU5ErkJggg==" alt=""/></li>
                    <li className="footerlistitems"><img src="data:image/png;base64,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" alt=""/></li>
                    <li className="footerlistitems"><img src="data:image/png;base64,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" alt=""/></li>
                    <li className="footerlistitems"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADpElEQVR4Xu2by6tNcRTHP1dC8n6TAZmQRwZeA5IMvAaEmEgipTuQgUL+AFGIohQDSQnFiAgZEKXEwMBEHnm/n3nTV7+r696991nr3rOdvffZa3j6/tZvre9e+/dbj30aqHNpqHP/KQkoI6DOGShfAWcAdAU6Au+c6zILt0TAaGA9MAcYGDz5AFwAdgIXM+udwbBKBKwC9gKdYnT9ArYCmwx7ZRKSRMBM4CzQwWD5amC/AZc5SBIB14AJRoufAkOB70Z8ZmBxBAwBHjqtnAZccq6pOTyOgCnAFad1K4CDzjU1h8cRMA646bRuKXDUuabm8DgCdOq/ALo7LBwO3HXgMwFNOgR3AWuNVp4C5hmxmYIlEdATuAwoEUqSJ4DOjHuZ8sxoTKVEqC+wD1gIkaXzeUDJUi6dF0eVCGjicRQwGxgWfngAnANuGInOLMxKQGYdaK9hJQHtZTDv6/MSAcpHJgFjgd5AZ+Al8DwkbDqLVJm6JYmAjcBio0YdiMK3lP7AaaMOwRa1uFHktHoR8xNKcq1TMXYC2ALcd+yXeAvsARqNyo4BSyKwg4FHRh2CjQRuhye8A1hjLMebtvgC7AY2A98s+yZFQDUIGAQ8thgSMCJAVaiiZqpjXUuoIlLR+7aSjrQJUAtNmaJVlG9sB+ZaFyTgVM1OrxQJWSPgQMgsq+D/HxVq10WdTX/1p03AgHBAVcshr56fwETgetzCtAnQLfDMa3WV8YeBZbUioF+4q6vsk0udbgP1KiJbfGlHQHsI0Al+BFBz9hOgK1WzCXWrvQmcrlNVta0kbQJUTquz5JWTwErgdcTCWcBxoJtD6SFgeS0I6BNSVoetqLu0oML1pYxRJFjlDjCiFgQob39ltTLMHGWoJWquApMdursAyhT/kbRfgV4xYRxn9zZgg9GpdWE2aYSjWUerrDRrBKjrdMbokXd2MQa49b8jQI3VN0aHBBvvmEd4c4zIyVXaEdDDUpA0I6ipGrRwpp7AZwswYGZEjfLzTIBsV6prlZoQoE6O52sSTwTkggAlK++tj6hZQ8SyJBcE1H0EpHkI5iICvNdg4c4AbyZYOAK8tUDhCPBWgyUBYS5QmGvQ2xApXAR4W2KFI8BbsRWOAO9coHAEeEdjhSOgLcNRTYctkotUuK3j8cIQ4P3oOlOvgP4eo7aTRb4CHyOA+q+BCiKrqHnywwoOn8tY4epLtPqc3ztism6WG1xJQG4eVUqGlhGQErG5UVv3EfAbKgz8QSjJFGAAAAAASUVORK5CYII=" alt=""/></li>
                    <li className="footerlistitems"><img src="data:image/png;base64,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" alt=""/></li>
                    <li className="footerlistitems"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFlElEQVR4Xu2adeg0VRSGn88WW7FbRLCxEzvBVhQDFQuxUezCQP9RbMQWxRZRDGwsxG5FERNssQNbHr3343Kd2Znd38asuweGXWbunTnnnXPOfc+5M4kRl0kjbj9jAMYeMOIIjENgSB1gGmB9YFlgmXDcAZzWrj3D6gHTAt8DUycG3wlsNSoAaOfrwFKJwe8Bi40SADcBOyYG/wXMCnzXDghNC4EpgJWBZ2oYcSJwajZuDeCpGnMnD2kSAIsAVwEasSrwSoUh2wK3ZWP2BS4fRgB2By4EZgrKvxxA+LWFMYsDb2fXzwMOGzYAFgLeAGbIFD8d0M3LxHAx3tN5DwEbDRsA6ntg8IBU99+BtYGnWxj0bMgZccgXwFzDCIC56B5gs0z5N4EVgZ9LjDJn7Jldmxv4vC4ITUqC8wOvArNlyp8DHF5i0BHAWdm1DYGHhxEAdfZt+lZT+RPQqEcKjNoEuC87bxI0GdaSJnlAVPhWYPtM+/eB5QtIznzAR9nYy4D9alkPjWyIzBlCwVhOpcywL4E5koESIblELemXB7hk6cp1ZWvg9oLBWwB3Z+cNjXWTcz8AMwNS40rpBwAmNZeyi8Lh8lZHrgN2yQZ+Ekrfr5LzEiiX0VQWBQybSukHAOcDBwdNXNYOBe6v1OzfwkY6vGA29oYMmP2Bi7MxlsWWx5XSawCWBl7M6naVugs4CPigQsONQ5bP9dwJuDnMlSw9nt3nOODMSuv7kASlphuUKPIjcAZwNvBLC2UvKcjqJj67QZ8CswBfZ7ZcD+zaBABWAC4A1mqhzDvAscAtJWPk+i8BFj+ppB2gD7NQMXRcNiul1yGgAj5jh/Cm83hOFXww5AcLo1wE8FFgyuzCXoE4SaM3T65ZRVpZtqom/xneDwCiXr7JI4FjAHt6RfJbSGgnhJ5fOsZQySmx1eBywAHAUSEkpNOvAacA31a5QD8BiLosAZybvbFcz49DWFybrOfTAS8AS2aDTXhXAn8A5oa2ZBAARAW3DJzdNbtMHgMOAWyQKFaGMj27wd8ARwOXtmVxNniQAKjK9MFAXX7GEkNkkJIiKz/rfV17NWDvgjqgbSx6AcDqoR5/tw1t7Aca49u1mKN7Hx/cvS6brFShFwC4BLlGC4CZ3UM+kNLXMsXc7ZE5uttTJE8A69Tl+ZXW92AVsIKTr+fA6sYywgiIzK2M/EwVuL2uLsmJYpIzB1R1i+vYPXlMtz1gN8DMXSU/AU8mgJjd8+rNEvekQJmtJvUM64iuSrcBuBrYowMN7eFJdPSQewGZXRRre4HYOWT+Dm5fPqXbAJjMNg2taWuA2TvU1n0/wXggAGON3xPpNgCpktJWY9aKzl79mi0YYCvjZId2i2s3OttBqh0AjMN9kpvbcKhT18cprvlyesHwEJw6zzeBmlxdBu0VxvaX1aT8YEJSR4H4AD9KSDO3LSv35zoVe3/rBTB8w+4QFclzwCrhglVhrPJshi7Q6cPjvEECkOvu3n70DtvdcQm0sSHfVxoNgEugic9Cxqz+WeAE/pcbVFZmCSJyfbO/gPjpy/PDAMAVgPV5mRg+skG7N4IkKPE3PRf/F92n0R5gh8a2dTfEBCdAetE2SZnbaABMVit1w/rkHrJDV4+YfBsNwFuAzY5uiuGQkqlGA6Dhdm1UeF7AfTs3ReL/9JzLl7s3VWJ/0NZ6lMYDUGVQet1lTlD8oGGecPhf4PyV/FhSuwfwvwSgHbAaD4DsbEK9uRI03BSx4dl4AIq2pzp5w/mck7NvARubA8YAFGxQjpQHSIBu7IbF2T3cQPG7gsbngB7YXnjLxuaAMQB9QqBRHiBNvaZPhsfH2BaXPSoD7wj12fb/PG4MwKB7goP2ADdPFp6oEu00RR1rK7spYpPEL0EmJO0AMKEHNXXyyAPwN/s1QlAGv/iwAAAAAElFTkSuQmCC" alt=""/></li>
                    <li className="footerlistitems"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAHWUlEQVR4Xu2bBahuRRDHf8/ubuzubmzs7m4sEDGwu7sRu7BbbEXFRrELFbG7xe7g99jv8cU5Z/fEd+9F38Dhu7yzOzs7Z3bmPzP7hvE/p2H/8/0zUgEjLWBgNTAeMDswAzBueJTgp/C8D7wJ/DhQYvX7CEwHrAasCCwDTJ+4MRXxOPAQcB/wUeK80sP6oYCxgM2BbYHlgVFKS9U54W/gYeAK4Hrg15r8OqY3qQDNezdgH2DqJoVs4/UpcBpwfjgytZdpSgHrAOeUMPG6gn8CHBSsohavugqYErgMWKOWFNUn3w3sAHxRlUUdBejYru6juafuSWvYEngkdUL7uKoK2Bq4FBi9yqJ9mPMnsGuQqRT7KgrQyZ0KQw5F/hMc8JllNFBWAbsAF5RZYBDG7hEcctLSZRSwPnATMGoS58Eb9BewIXB7igipCpgNeBaYIIVpxTECnhho0sxTZP4OWAR4OyZLCrMxgSeBhWLMar6fFRBFLhCeBcOvoVY6MTw6vO0Bz/poBWs+BywN/F4kV4oCDgOOrrm52PRXgfmAnQHD2ktt+H8qQOWYG7TTKcC+EcaHAMfXUcDMgMKNHdtBzfcnAacDQt3WMfgaeDE85gEvd60h+BIIFdHPwDzAe3mDYhZwHbBZzc2lTDdpmgm4PGfwxcE62l/vBZyRwFywJm7JpCIFmLe/NgBe/1tgioAqN82R8w9gPeCe8H5+4P4wL6YDo8KcwFtZA4sUcBGwU4x7A++1sm2AL4GJIvxeCOnwoiVR6IUBKfawz1PAOMBnwPgNbDDGws1/GHL+2Niq778POYs+oYPyFOCZubLqaiXmGfutHejN9ysxr8rQLQCtLUkBtwAbVFml5BzxhbHaSKO37ieJYjdJUYBhyPx60n5KE3gfGizNGmC/ybCqs9XqRlDWERDxPd+wNFZ9RWZPBZCjf1HJ7wLCW/GGgMfH9ZcEFg7IsElRRJeCrEIFCDOt8tQlQ9ddwFXht2wxU0fsMdQfrdJQON6uu4yWZQEnAAcm7t6vKkb3d/JQAteZ3QkIoaPJSOI6cwPHBUWIGi2VfxUSHmXVWlJIWCw8LrSAG4GNE7iZbupUupMNE5qyXzthueFDtIruUDYGcDOwdgKTG7qRbZYFiLBWjjDzTM8YvkLCun0fonPTn6igInJvq8YsQEe1RISRJm4pfCiR/mbNiEDubamYAszAzMmLyOxMh5JK5vTLAh8AT0cmaVmLhzxEfJBKyiSqLCIjgJFgBGUdgScCOCli9EwQMkU4Q9q9wIRh8LnA7jkTLbtdG8Kf4VEHd3LKIsERx5yhe7NHWagAhbWhGaPlgMdig4AHgZW6xon6zDS7yaghJmiR1R8BmVi+iEyn7R/GyL11NHGyLMC4vVWMU6jceOY6gEXGvFeAebv+3aZKlsButDsBUyE6uDwSOHn+U/qR5jc2bUdQlgIOB45KUIBDHHtMZOwRwJFtY4S9xvWezCw0Nmx1tcijpkP2OOSRzVJ7FSkk9BZPFCrAClBP1pTDfX/A2lwRWbhUQKOGm1cheQDJ0ptCrhASJBX8eYS/4MZGaQpZcBHnFCpglrzqScYKZwN7pqzcxzEp3r+1vGW3jvpgXj3AQV5jiVFPWIlNaPi98usfUmR1XLuDHS5KngIuAXZMFNaY7VkdDFq9rU4YW98Sn629DspTgHDRhCOFHg1hzuJjHk0DXBPOqkWQIhKp6agUNrOQGSbbsBHZdQCbAsbCe0NykgIsiuiwpk3RQOgWF5W0TJCsyBiDVawVpzdC88MWuyHMULlRuFDlGBOtottiZYq2H4dj0vORiqrChkK9cCrtHdpVRePXDUdL0/ULtpNh8Y6Qrxc1PJRZ2Uy3U8kwnBnaixQwSfCYZSrDgihN95eIZH51212WwS1RfQO8AxQdI1lqSX753EZHxrpakd7f+kEPxTpD4vCy1VpN+4DU9nTiJ1RO8Ykx382UIQs8B+dNiCnAdrgbSoGZ3WvoHM8DbkuwiDz5vHqnXzB5WqzMrsNYz/5cwA9VFeA8LyDZX6tK9upVgpmYqbAprklOFlndMRV3s2Zt+gyv1FYlL2x6uTKXYhbQmmgpqaemXlGq38J59NzbF1SGiQF9zmSASmiChPM2QwopVQGaojdE5ogxHCLvxQ/eEIml0UnXTVp7Mk57rv1aQ5m0LKtPWfWGHrlTLaA10dRUNFXnXPZTeYZfUWz3bZLaPqCdgdWdW/t8YaqKknS2NlK8Yp9MZS2gxdgqjGjNVtZQIK/WWJ2yoFuKqirARazFi/xsWw0mWVqzhOflqtJURwEu5qVJqzG2m4SpA0me92MBW2UxCN2oD8hiZhXpLGCtAdKAjRkrUeYPtaiuBXQvrm/QIuwtNs3btR4IWaB1gEaoH0IqmIDJjM3HTk8dsjxnOVt/4/8oa5T6pYB2IS2B2wcQnHhdzet3eRcvPddu8vXQdDGk+XffaCAU0C281SYxv/C6hSrNCczbvSpX1ANoXBGDoYDGN1GH4UgF1NHef2Huv5gaRFDhCPbfAAAAAElFTkSuQmCC" alt=""/></li>
                </ul>

                

            </div>
        );
    }
}

export default footer;